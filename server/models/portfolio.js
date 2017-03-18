const mongoose = require("mongoose");
const AssetClass = require("./assetClass");
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
