// Import mongoose
const mongoose = require("mongoose");

// User Schema
const stockSchema = new mongoose.Schema({
    entry: String,
    date: String,
    time: String,
    vehicleNo: String,
    tareWeight: Number,
    grossWeight: Number,
    driver: String,
    owner: String,
    stocker: String,
});

// Export schema
module.exports = stockSchema;