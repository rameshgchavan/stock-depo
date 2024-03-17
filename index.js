// Import express and middlewares
const express = require("express");
const dotEnv = require("dotenv");
// const cors = require("cors");

// Import Routes
const userRoutes = require("./src/apiRoutes/userRoutes");
const entryRoutes = require("./src/apiRoutes/entryRoutes");
const vehicleRoutes = require("./src/apiRoutes/vehicleRoutes");
const formRoutes = require("./src/apiRoutes/formRoutes");

// Create object of express
const app = express();

// Use middlewares and routes in express
// app.use(cors());
app.use(express.json({ limit: '200mb' }));
app.use("/users", userRoutes);
app.use("/entries", entryRoutes);
app.use("/vehicles", vehicleRoutes);
app.use("/form", formRoutes);

//Run frontend
app.use(express.static('./client/build')); //Note: Copy build folder of frontend and paste it into backend

// If request route miss matching then send index.html file in build directory
app.get('/*', (req, res) => {
    // root: __dirname is used to get rid off error 
    // 'path must be absolute or specify root to res.sendFile'
    res.sendFile('./client/build/index.html', { root: __dirname });
});

// Environment setting
dotEnv.config();
const PORT = process.env.PORT;

app.listen(PORT || 8080, () => {
    try {
        console.log("Server is listening on Port: " + PORT);
    }
    catch (err) {
        console.log("Connection failed for reason: " + err);
    }
});