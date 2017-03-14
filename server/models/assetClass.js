const mongoose = require("mongoose");
const Fund = require("./fund");
const Schema = mongoose.Schema;

// Define user model
const assetClassSchema = new Schema({
  type: {
    type: String,
    unique: true,
    required: true
  },
  weight: {
    type: Number,
    validate: {
      validator: (weight) => weight >= 0 && weight <= 100,
      message: "Weight must be greater then 0 and less then 100."
    },
    required: true
  },
  color: {
    type: String,
    required: true
  },
  funds: [Fund]
});

// Export the model
module.exports = assetClassSchema;
