const mongoose = require('mongoose');
const config = require('./index');

const dbConn = async () => {
  try {
    await mongoose.connect(config.db);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    throw new Error(`Database connection failed: ${error.message}`);
  }
};

module.exports = dbConn;
