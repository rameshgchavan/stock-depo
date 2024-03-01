// Import express
const express = require("express");

// Import tokenVerification function
const tokenVerification = require("../functions/tokenVerificationModel");

// Import vehicles Schema Model
const vehicleModel = require("../models/vehicleModel");

// Create Router object
const vehicleRoutes = express.Router();

// (APIs) downwards
// Get route to get vehicle details
vehicleRoutes.route("/").get(tokenVerification, async (req, res) => {
    // Destruct request header
    const { dbname } = req.headers;

    const VehicleModel = vehicleModel(dbname);

    // Find by id and update object of document in collection
    await VehicleModel.find()
        .then(data => { res.send(data) })
        .catch(err => res.send(err));
});

// Post route to save vehicle details
vehicleRoutes.route("/save").post(tokenVerification, async (req, res) => {
    // Destruct request body
    const { dbName, vehicleData } = req.body;

    const VehicleModel = vehicleModel(dbName);

    // Find by id and update object of document in collection
    await VehicleModel(vehicleData).save()
        .then(res.send({
            code: 201,
            message: `Saved successfully.`
        }))
        .catch(err => res.send(err));
});

// Put route to update vehicle details
vehicleRoutes.route("/update").put(tokenVerification, async (req, res) => {
    // Destruct request body
    const { dbName, findVal, updateData } = req.body;

    const VehicleModel = vehicleModel(dbName);

    // Find by id and update object of document in collection
    await VehicleModel.findOneAndUpdate(findVal, updateData)
        .then(res.send({
            code: 202,
            message: `Updated successfully.`
        }))
        .catch(err => res.send(err));
});

// Export vehicle Routes
module.exports = vehicleRoutes;