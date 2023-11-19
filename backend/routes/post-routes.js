const express = require("express");
const router = express.Router();

const {
	createPost,
	getPostsByUserID,
	updatePostByID,
	getAllPosts,
    getPostsByQuery
} = require("../controllers/post-controller");

router.get("/get-all-posts", getAllPosts);

router.get("/get-posts-by-query/query", getPostsByQuery);

router.post("/create-post", createPost);

router.get("/:userId", getPostsByUserID);

router.patch("/:postId", updatePostByID);

module.exports = router;
