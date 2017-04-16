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

// Create the model class - represents collection of all users
const Portfolio = mongoose.model("portfolio", portfolioSchema);
// Export the model
module.exports = Portfolio;
