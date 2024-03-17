// Import express
const express = require("express");

// Import tokenVerification function
const tokenVerification = require("../functions/tokenVerificationModel");

// Import entry Schema Model
const entryModel = require("../models/entryModel");

// Create Router object
const entryRoutes = express.Router();

// (APIs) downwards
// Get route to get entries
entryRoutes.route("/").get(tokenVerification, async (req, res) => {
    // Destruct request header
    const { dbname } = req.headers;

    const EntryModel = entryModel(dbname);

    // Find by id and update object of document in collection
    await EntryModel.find()
        .then(data => { res.send(data) })
        .catch(err => res.send(err));
});

// Post route to update entry
entryRoutes.route("/save").post(tokenVerification, async (req, res) => {
    // Destruct request body
    const { dbName, entry } = req.body;

    const EntryModel = entryModel(dbName);

    // Find by id and update object of document in collection
    await EntryModel(entry).save()
        .then(res.send({
            code: 201,
            message: `Saved successfully.`
        }))
        .catch(err => res.send(err));
});

// Put route to update entry
entryRoutes.route("/update").put(tokenVerification, async (req, res) => {
    // Destruct request body
    const { dbName, findVal, updateData } = req.body;

    const EntryModel = entryModel(dbName);

    // Find by id and update object of document in collection
    await EntryModel.findOneAndUpdate(findVal, updateData)
        .then(res.send({
            code: 202,
            message: `Updated successfully.`
        }))
        .catch(err => res.send(err));
});

// Export entry Routes
module.exports = entryRoutes;