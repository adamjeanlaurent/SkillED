const mongoose = require('mongoose');

const courseSchema = require('./courseSchema');

const learningPathSchema = new mongoose.Schema({
    courses: [courseSchema],
    title: String
});

const LearningPath = mongoose.model("LearningPath", learningPathSchema);

exports.LearningPath = LearningPath;