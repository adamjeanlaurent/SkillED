const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    companyName: String,
    jobTitle: String,
    description: String,
    Industry : String
});

const Job = mongoose.model("job", jobSchema);

exports.Job = Job;