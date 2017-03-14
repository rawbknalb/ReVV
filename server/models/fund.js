const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define user model
const fundSchema = new Schema({
  isin: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    unique: true,
    required: true
  },
  weight: {
    type: Number,
    validate: {
      validator: weight => weight >= 0 && weight <= 100,
      message: "Weight must be greater then 0 and less then 100."
    },
    required: true
  }
});

// Export the model
module.exports = fundSchema;
