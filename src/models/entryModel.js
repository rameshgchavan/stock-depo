// Import mongoose
const entrySchema = require("../shemas/entrySchema");
const mongoDBConnection = require("../dbConnection/mongoDbConnection");

// User Model
const entryModel = (dbName) => {
    // Creating connetion with database
    const connection = mongoDBConnection.useDb(`stock-depo-${dbName}`, { useCache: true });

    // Returning model by creating new or getting existing model
    return (
        connection.model("stock-details", entrySchema) ||
        connection.models["stock-details"]

    )
}

// Export User Model
module.exports = entryModel