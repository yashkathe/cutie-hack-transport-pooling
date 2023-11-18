const User = require("../models/user-model");
const bcrypt = require("bcrypt");

const { createToken } = require("../utils/token-manager.js");
const { COOKIE_NAME } = require("../utils/constants.js");

exports.getUsers = async (req, res, next) => {
	let users;

	try {
		users = await User.find();
		return res.status(200).json({ message: "OK", users });
	} catch (error) {
		return res.status(500).json({ message: "ERROR", cause: error.message });
	}
};

exports.userLogin = async (req, res, next) => {
	const { email, password } = req.body;

	let existingUser;
	try {
		existingUser = await User.findOne({ email: email });
	} catch (error) {
		return next(new HttpError("Logging in failed", 500));
	}

	if (!existingUser) {
		return res
			.status(401)
			.json({ message: "ERROR", cause: "User doesn't exist" });
	}

	let isValidPassword = false;
	try {
		isValidPassword = await bcrypt.compare(password, existingUser.password);
	} catch (error) {
		return res.status(500).json({ message: "ERROR", cause: error.message });
	}

	if (!isValidPassword) {
		return next(new HttpError("Invalid Password", 401));
	}

	// if user will login again we have to -> set new cookies -> erase previous cookies
	res.clearCookie(COOKIE_NAME),
		{
			path: "/", //cookie directory in browser
			domain: process.env.DOMAIN, // our website domain
			httpOnly: true,
			signed: true,
		};

	// create token
	const token = createToken(existingUser._id.toString(), existingUser.email, "7d");

	const expires = new Date();
	expires.setDate(expires.getDate() + 7);

	res.cookie(COOKIE_NAME, token, {
		path: "/", //cookie directory in browser
		domain: process.env.DOMAIN, // our website domain
		expires, // same as token expiration time
		httpOnly: true,
		signed: true,
	});

	res.status(200).json({
		userId: existingUser.id,
		email: existingUser.email,
	});
};

exports.userSignup = async (req, res, next) => {
	const { name, email, password } = req.body;

	// check if user exists
	let existingUser;
	try {
		existingUser = User.find({ email: email });
	} catch (error) {
		return res.status(500).json({ message: "ERROR", cause: error.message });
	}

	// if (existingUser)
	// 	return res
	// 		.status(422)
	// 		.json({ message: "ERROR", cause: "User already exists" });

	// hash the password
	let hashedPassword;
	try {
		hashedPassword = await bcrypt.hash(password, 12);
	} catch (err) {
		return res.status(500).json({ message: "ERROR", cause: error.message });
	}

	const createdUser = new User({
		name,
		email,
		password: hashedPassword,
	});

	// create a user
	try {
		await createdUser.save();
	} catch (error) {
		return res.status(500).json({ message: "ERROR", cause: error.message });
	}

	// create token and store cookie

	res.clearCookie(COOKIE_NAME),
		{
			path: "/", //cookie directory in browser
			domain: process.env.DOMAIN, // our website domain
			httpOnly: true,
			signed: true,
		};

	// create token
	const token = createToken(
		createdUser._id.toString(),
		createdUser.email,
		"7d"
	);

	const expires = new Date();
	expires.setDate(expires.getDate() + 7);

	res.cookie(COOKIE_NAME, token, {
		path: "/", //cookie directory in browser
		domain: process.env.DOMAIN, // our website domain
		expires, // same as token expiration time
		httpOnly: true,
		signed: true,
	});

	res.status(201).json({
		message: "OKAY",
		userId: createdUser.id,
		email: createdUser.email,
	});
};
