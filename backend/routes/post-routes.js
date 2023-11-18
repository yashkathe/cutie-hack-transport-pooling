const express = require("express");
const router = express.Router();

const {
	createPost,
	getPostsByUserID,
	updatePostByID,
} = require("../controllers/post-controller");

router.get("/:userId", getPostsByUserID);

router.patch("/:postId", updatePostByID);

router.post("/create-post", createPost);

module.exports = router;
