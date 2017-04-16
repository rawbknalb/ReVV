const User = require("../../models/user");
const Portfolio = require("../../models/portfolio");

exports.fetchAssetAllocation = function(req, res, next) {
  function fetchPortfolio(name) {
    const portfolio = Portfolio.findOne({ name: "RobFolio3" })
    return portfolio
  }
  fetchPortfolio(req.user.assetAllocation).then(portfolio => {
    res.json({
      user: {
        id: req.user._id,
        assetAllocation: portfolio
      }
    });
  })
};
