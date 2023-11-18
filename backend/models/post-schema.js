
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now,
    },
    location: {
        type: [Number],
        required: true
      }
  });