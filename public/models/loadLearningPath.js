const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://adam:adam@hackatbrown-jtc8a.gcp.mongodb.net/test?retryWrites=true&w=majority', 
{useNewUrlParser: true});

const courseSchema = require('./courseSchema');

const LearningPath = require('./learningPathModel');

const Course = mongoose.model('Course', courseSchema);

const WebDevelopment = new LearningPath({
    title: "Web Development",
    courses: [
        new Course({
            url: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
            name: 'React - The Complete Guide'
        }),

        new Course({
            url: 'https://www.udemy.com/course/the-complete-nodejs-developer-course-2/',
            name: 'The Complete Node.js Developer Course (3rd Edition)'
        }),

        new Course({
            url: 'https://www.udemy.com/course/mongodb-the-complete-developers-guide/',
            name: 'MongoDB - The Complete Developer"s Guide 2020'
        }),

        new Course({
            url: 'https://www.udemy.com/course/bootstrap-4-from-scratch-with-5-projects/',
            name: 'Bootstrap 4 From Scratch With 5 Projects'
        }),

        new Course({
            url: 'https://www.udemy.com/course/beginners-guide-to-web-design-wireframes/',
            name: 'Beginners Guide to Wireframes - A Mini Course'
        })
    ]
});