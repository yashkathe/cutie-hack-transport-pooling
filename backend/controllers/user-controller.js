const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
		return res.status(401),json({message:"ERROR", cause : "invalid password"})
	}

	//create token
	let token;
	try {
		token = jwt.sign(
			{
				userId: existingUser.id,
				email: existingUser.email,
			},
			process.env.JWT_KEY,
			{ expiresIn: "1h" }
		);
	} catch (error) {
		return res.status(500).json({ message: "ERROR", cause: error.message });
	}

	res.status(200).json({
		userId: existingUser.id,
		email: existingUser.email,
		token: token,
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
	} catch (error) {
		return res.status(500).json({ message: "ERROR", cause: error.message });
	}

	const createdUser = new User({
		name,
		email,
		password: hashedPassword,
        posts:[]
	});

	// create a user
	try {
		await createdUser.save();
	} catch (error) {
		return res.status(500).json({ message: "ERROR", cause: error.message });
	}

	let token;
	try {
		token = jwt.sign(
			{
				userId: createdUser.id,
				email: createdUser.email,
			},
			process.env.JWT_KEY,
			{ expiresIn: "1h" }
		);
	} catch (error) {
		return res.status(500).json({ message: "ERROR", cause: error.message });
	}

	res.status(201).json({
		message: "OKAY",
		userId: createdUser.id,
		email: createdUser.email,
		token: token,
	});
};
