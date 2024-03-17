// Import mongoose
const mongoose = require("mongoose");

// User Schema
const entrySchema = new mongoose.Schema({
    entry: String,
    date: String,
    time: String,
    vehicle: String,
    rcNo: String,
    tareWeight: Number,
    grossWeight: Number,
    driver: String,
    owner: String,
    stocker: String,
});

// Export schema
module.exports = entrySchema;