const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    DOB: String,
    Gender: String,
    Password: String,
});

const User = mongoose.model("User", userSchema);

exports.User = User;