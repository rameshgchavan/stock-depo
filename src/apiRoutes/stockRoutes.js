// Import express
const express = require("express");

// Import tokenVerification function
const tokenVerification = require("../functions/tokenVerificationModel");

// Import stocks Schema Model
const stockModel = require("../models/stockModel");

// Create Router object
const stockRoutes = express.Router();

// (APIs) downwards
// Get route to get stock details
stockRoutes.route("/").get(tokenVerification, async (req, res) => {
    // Destruct request header
    const { dbname } = req.headers;

    const StockModel = stockModel(dbname);

    // Find by id and update object of document in collection
    await StockModel.find()
        .then(data => { res.send(data) })
        .catch(err => res.send(err));
});

// Post route to update stock details
stockRoutes.route("/save").post(tokenVerification, async (req, res) => {
    // Destruct request body
    const { dbName, stockData } = req.body;

    const StockModel = stockModel(dbName);

    // Find by id and update object of document in collection
    await StockModel(stockData).save()
        .then(res.send({
            code: 201,
            message: `Saved successfully.`
        }))
        .catch(err => res.send(err));
});

// Put route to update stock details
stockRoutes.route("/update").put(tokenVerification, async (req, res) => {
    // Destruct request body
    const { dbName, findVal, updateData } = req.body;

    const StockModel = stockModel(dbName);

    // Find by id and update object of document in collection
    await StockModel.findOneAndUpdate(findVal, updateData)
        .then(res.send({
            code: 202,
            message: `Updated successfully.`
        }))
        .catch(err => res.send(err));
});

// Export stock Routes
module.exports = stockRoutes;