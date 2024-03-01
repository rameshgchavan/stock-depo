// Import mongoose
const userSchema = require("../shemas/vehicleSchema");
const mongoDBConnection = require("../dbConnection/mongoDbConnection");

// User Model
const vehicleModel = (dbName) => {
    // Creating connetion with database
    const connection = mongoDBConnection.useDb(`stock-depo-${dbName}`, { useCache: true });

    // Returning model by creating new or getting existing model
    return (
        connection.model("vehicle-details", userSchema) ||
        connection.models["vehicle-details"]

    )
}

// Export User Model
module.exports = vehicleModel