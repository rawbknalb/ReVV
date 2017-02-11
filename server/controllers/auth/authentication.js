const jwt = require("jwt-simple");
const config = require("../../config");
// :: Import User Collection ::
const User = require("../../models/user");

// Generate JWT
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
  // User has already had their email and password auth'd
  // Just need to give them a token
  res.send({ token: tokenForUser(req.user) });
};

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  // 0. Check if credentials exist
  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide email and password" });
  }

  // 1. Check if user with the given email exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    // 2. If a user with email does exist, return error
    if (existingUser) {
      return res.status(422).send({ error: "Email is in use" });
    }

    // 3. If a user with email does NOT exist, create and save user record
    const user = new User({
      email: email,
      password: password
    });

    user.save(function(err) {
      if (err) {
        return next(err);
      }

      // 4. Respond to request indicating the user was created
      res.json({ token: tokenForUser(user) });
    });
  });
};
