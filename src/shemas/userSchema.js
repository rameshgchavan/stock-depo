// Import mongoose
const mongoose = require("mongoose");

// User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    user: String,
    status: String,
    lastLogin: String
});

// Export schema
module.exports = userSchema;