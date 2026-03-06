const mongoose = require('mongoose');
<<<<<<< HEAD
require('dotenv').config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
=======

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Connected');
  } catch (err) {
    console.error(err.message);
>>>>>>> ba4c7bbf8e6937ca57e177b24abf839e0406b928
    process.exit(1);
  }
};

module.exports = connectDB;
