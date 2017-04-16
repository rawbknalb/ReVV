const User = require("../../models/user");
const Portfolio = require("../../models/portfolio");

function fetchPortfolio(name) {
  const portfolio = Portfolio.findOne({ name: "RobFolio3" }).then(result => result);
  console.log(portfolio)
  return portfolio
}

exports.fetchAssetAllocation = function(req, res, next) {
  res.json({
    user: {
      id: req.user._id,
      assetAllocation: fetchPortfolio(req.user.assetAllocation)
    }
  });
};
