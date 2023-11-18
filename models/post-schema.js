const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	location: {
		type: [Number],
		required: true,
	},
});

module.exports = mongoose.model("Posts", postSchema);
