const express = require("express");
const router = express.Router();

const {
	createPost,
	getPostsByUserID,
	updatePostByID,
	getAllPosts,
} = require("../controllers/post-controller");

router.get("/:userId", getPostsByUserID);

router.patch("/:postId", updatePostByID);

router.post("/create-post", createPost);

router.get("/get-all-posts", getAllPosts);

module.exports = router;
