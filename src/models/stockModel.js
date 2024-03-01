// Import mongoose
const userSchema = require("../shemas/stockSchema");
const mongoDBConnection = require("../dbConnection/mongoDbConnection");

// User Model
const stockModel = (dbName) => {
    // Creating connetion with database
    const connection = mongoDBConnection.useDb(`stock-depo-${dbName}`, { useCache: true });

    // Returning model by creating new or getting existing model
    return (
        connection.model("stock-details", userSchema) ||
        connection.models["stock-details"]

    )
}

// Export User Model
module.exports = stockModel