const express = require("express");
const router = express.Router();
const {
	getUsers,
	userLogin,
	userSignup,
} = require("../controllers/user-controller");

router.get("/", getUsers);

router.post("/login", userLogin);

router.post("/signup", userSignup);

module.exports = router;
