const mongoose = require('mongoose');

const courseSchema = require('./courseSchema');

const learningPathSchema = new mongoose.Schema({
    title: String,
    courses: [{
        url: String,
        name: String,
        imageLink: String
    }]
});

const LearningPath = mongoose.model("LearningPath", learningPathSchema);

exports.LearningPath = LearningPath;