const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    url: String,
    author: String
});

exports.courseSchema = courseSchema;