const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { config } = require("dotenv");

config();

const app = express();
app.use(bodyParser.json());

mongoose
	.set("strictQuery", false)
	.connect(process.env.MONGO_URI)
	.then(() => {
		app.listen(5000);
		console.log(`Server started on port 5000 `);
	})
	.catch((err) => {
		console.log(err);
	});