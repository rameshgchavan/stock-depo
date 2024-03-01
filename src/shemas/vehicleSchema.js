// Import mongoose
const mongoose = require("mongoose");

// User Schema
const vehicleSchema = new mongoose.Schema({
    vehicle: String,
    rcNo: String,
    tareWeight: Number,
    driver: Object,
    owner: Object
});

// Export schema
module.exports = vehicleSchema;