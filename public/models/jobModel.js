const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    companyName: String,
    jobTitle: String,
    description: String
});

const Job = mongoose.model("Job", jobSchema);

exports.Job = Job;