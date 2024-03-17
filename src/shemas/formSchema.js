// Import mongoose
const mongoose = require("mongoose");

// User Schema
const formSchema = new mongoose.Schema({
    name: String,
    address: Object
});

// Export schema
module.exports = formSchema;