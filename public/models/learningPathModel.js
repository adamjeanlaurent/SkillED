const mongoose = require('mongoose');

const courseSchema = require('./courseSchema');

const learningPathSchema = new mongoose.Schema({
    title: String,
    courses: [courseSchema]
});

const LearningPath = mongoose.model("LearningPath", learningPathSchema);

exports.LearningPath = LearningPath;