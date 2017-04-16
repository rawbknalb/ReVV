const mongoose = require("mongoose");
const AssetClass = require("./assetClassSchema");
const Schema = mongoose.Schema;

// Define user model
const portfolioSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  classes: [AssetClass]
});

// Export the model
module.exports = portfolioSchema;
