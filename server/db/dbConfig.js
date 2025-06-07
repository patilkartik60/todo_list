const mongoose = require('mongoose');

const uri = "mongodb+srv://patilkartik60:firstapp@cluster0.getb8x3.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0";

async function connectDB() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to MongoDB using Mongoose!");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

module.exports = connectDB;