// Import express
const express = require("express");

// Import tokenVerification function
const tokenVerification = require("../functions/tokenVerificationModel");

// Import Form Schema Model
const FormModel = require("../models/formModel")();

// Create Router object
const formRoutes = express.Router();

// (APIs) downwards
// Post route to update stock details
formRoutes.route("/save").post(tokenVerification, async (req, res) => {
    // Destruct request body
    const { formData } = req.body;

    // Find by id and update object of document in collection
    await FormModel(formData).save()
        .then(res.send({
            code: 201,
            message: `Saved successfully.`
        }))
        .catch(err => res.send(err));
});

// Export User Routes
module.exports = formRoutes;