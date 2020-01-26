const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    url: String,
    name: String
});

exports.courseSchema = courseSchema;