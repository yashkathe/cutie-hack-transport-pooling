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
	currentTime: {
		type: Date,
	},
	travelDate: {
		type: Date,
		required: true,
	},
	userLocation: {
		type: Number,
	},
	destinationPinCode: {
		type: Number,
	},
	createdBy: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
});

module.exports = mongoose.model("Post", postSchema);
