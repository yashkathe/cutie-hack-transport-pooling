const mongoose = require("mongoose");

const Post = require("../models/post-model");
const User = require("../models/user-model");

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
