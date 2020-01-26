const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://adam:adam@hackatbrown-jtc8a.gcp.mongodb.net/test?retryWrites=true&w=majority', 
{useNewUrlParser: true});

const courseSchema = require('./public/models/courseSchema');

const LearningPath = require('./public/models/learningPathModel');

const Course = mongoose.model('Course', courseSchema);

const WebDevelopment = new LearningPath({
    title: "Web Development",
    courses: [
        new Course({
            url: 'efe',
            author: ''
        }),


    ]
});