// REQUIRED PACKAGE
const mongoose = require("mongoose");

// CONNECTING TO MONGODB
async function connectToMongoDB() {
  const connection =
    "mongodb+srv://katlehomafalela:BOPHelo0727*@cluster0.0kzu4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  try {
    await mongoose.connect(connection);
    console.log("Successfully Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// EXPORTING THE CONNECTION FUNCTION
module.exports = { connectToMongoDB };
