// REQUIRED PACKAGES
const express = require("express");
const cors = require("cors");
// CONNECTING TO MONGODB
const { connectToMongoDB } = require("./db/connection");
// CONFIGURING ENVIRONMENT VARIABLES
require("dotenv").config();

// IMPORTING ROUTES

// INITIALIZING EXPRESS APP
const app = express();

// PORT
const port =
  process.env.NODE_ENV === "test"
    ? process.env.NODE_LOCAL_TEST_PORT
    : process.env.NODE_LOCAL_PORT;

// CORS FOR FRONTEND ACCESS TO THIS SERVER   
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

// MIDDLEWARES
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ROUTES

// STARTING THE SERVER SERVER AND CONNECTING TO MONGODB
async function startServer() {
  try {
    await connectToMongoDB();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("An error occured while trying to start the server:", error);
    process.exit(1);
  }
}
startServer();

// EXPORT APP
module.exports = app;
