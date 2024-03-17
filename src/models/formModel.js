// Import mongoose
const formSchema = require("../shemas/formSchema");
const mongoDBConnection = require("../dbConnection/mongoDbConnection");

// Form Model
const formModel = () => {
    // Creating connetion with database
    const connection = mongoDBConnection.useDb("users", { useCache: true });

    // Returning model by creating new or getting existing model
    return (
        connection.model("form-users", formSchema) ||
        connection.models["form-users"]

    )
}

// Export Form Model
module.exports = formModel