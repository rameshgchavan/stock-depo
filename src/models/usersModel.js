// Import mongoose
const userSchema = require("../shemas/userSchema");
const mongoDBConnection = require("../dbConnection/mongoDbConnection");

// User Model
const usersModel = () => {
    // Creating connetion with database
    const connection = mongoDBConnection.useDb("users", { useCache: true });

    // Returning model by creating new or getting existing model
    return (
        connection.model("stock-depo-users", userSchema) ||
        connection.models["stock-depo-users"]

    )
}

// Export User Model
module.exports = usersModel