const User = require("../../models/user");

exports.fetchAssetAllocation = function(req, res, next) {
  // User has already had their email and password auth'd
  // Just need to give them a token
  // // 1. Check if user with the given email exists
  // User.findOne({ email: email }, function(err, existingUser) {
  //   if (err) {
  //     return next(err);
  //   }

  //   // 2. If a user with email does exist, return error
  //   if (existingUser) {
  //     return res.send({ error: "Email already taken" });
  //   }
  // } 
}