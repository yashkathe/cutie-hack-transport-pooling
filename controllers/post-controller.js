const mongoose = require("mongoose");

const Post = require("../models/post-model");
const User = require("../models/user-model");

const regex = require('../services/regex')

exports.createPost = async (req, res, next) => {
	const {
		title,
		description,
		travelDate,
		userLocation,
		destinationPinCode,
		createdBy,
	} = req.body;

	const currentTime = new Date();

	const createdPost = new Post({
		title,
		description,
		currentTime,
		travelDate,
		userLocation,
		destinationPinCode,
		createdBy,
	});

	let user;

	try {
		user = await User.findById(createdBy);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "ERROR", cause: error.message });
	}

	if (!user) {
		return res.status(404).json({
			message: "ERROR",
			cause: "You are not authenticated to perform this action",
		});
	}

	try {
		const sess = await mongoose.startSession();
		sess.startTransaction();
		await createdPost.save({ session: sess });
		user.posts.push(createdPost);
		await user.save({ session: sess });
		await sess.commitTransaction();
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: "ERROR",
			cause: "Creating post failed",
		});
	}

	res.status(201).json({ post: createdPost });
};

exports.getPostsByUserID = async (req, res, next) => {
	const userId = req.params.userId;

	let posts;
	try {
		posts = await Post.find({ createdBy: userId });
	} catch (error) {
		return res.status(500).json({ message: "ERROR", cause: error.message });
	}

	if (!posts || posts.length === 0) {
		return res
			.status(404)
			.json({ message: "ERROR", cause: "User has created no posts" });
	}

	res.json({
		posts: posts.map((post) => post.toObject({ getters: true })),
	});
};

exports.getAllPosts = async (req, res, next) => {
	let posts;

	try {
		console.log(posts);
		posts = await Post.find();
		return res.status(200).json({ message: "OK", posts });
	} catch (error) {
		return res.status(500).json({ message: "ERROR", cause: error.message });
	}
};

exports.getPostsByQuery = async (req, res, next) => {

    let { query } = req.query;
    console.log(query)
	query = regex(query);

	const regexPattern = new RegExp(query, "i");

	let post;
	try {
		post = await Post.find({
			$or: [
				{ title: { $regex: regexPattern } },
				{ description: { $regex: regexPattern } },
				{ destinationPinCode: { $regex: regexPattern } },
				{ userLocation: { $regex: regexPattern } },
			],
		});
	} catch (err) {
		console.log(err);
	}

	res
		.status(200)
		.json({
			post: post.map((post) => post.toObject({ getters: true })),
		});
};

exports.updatePostByID = async (req, res, next) => {
	console.log("hello");
	const { title, description, travelDate, userLocation, destinationPinCode } =
		req.body;
	console.log(req.body);

	const postId = req.params.postId;

	let post;
	try {
		post = await Post.findById(postId);
	} catch (error) {
		return res.status(500).json({ message: "ERROR", cause: error.message });
	}

	console.log(post);

	post.title = title;
	post.description = description;
	post.travelDate = travelDate;
	post.userLocation = userLocation;
	post.destinationPinCode = destinationPinCode;

	try {
		await post.save();
	} catch (error) {
		return res.status(500).json({ message: "ERROR", cause: error.message });
	}

	res.status(200).json({ post: post.toObject({ getters: true }) });
};
