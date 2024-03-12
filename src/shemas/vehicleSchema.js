// Import mongoose
const mongoose = require("mongoose");

// User Schema
const vehicleSchema = new mongoose.Schema({
    vehicle: String,
    rcNo: String,
    tareWeight: Number,
    drivers: String,
    owners: String
});

// Export schema
module.exports = vehicleSchema;