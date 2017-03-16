const User = require("../../models/user");

exports.fetchAssetAllocation = function(req, res, next) {
  res.json({
    user: { id: req.user._id, assetAllocation: req.user.assetAllocation }
  });
};
