const passport = require("passport");
const User = require("../models/user");
const config = require("../config");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

// :: Create local strategy ::
const localOptions = { usernameField: "email" };
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
  // Verify this email and password, call done with the user
  // if it is the correct email and password
  // otherwise, call done with false
  User.findOne({ email: email.toLowerCase() }, function(err, user) {
    if (err) { return done(err); }
    if (!user) { return done(null, false); }
    // compare passwords - is 'password' = user.password?
    user.comparePassword(password, function(err, isMatch) {
      if (err) { return done(err, false); }
      if (!isMatch) { return done(null, false); }
      // done returns user data as req.user
      return done(null, user);
    });
  });
});

// :: Setup options for JWT Strategy ::
const jwtOptions = {
  // extract the jwt from a header called authorization
  // when ever a request comes in and we want passport
  // to handle it - it needs to look at the request header
  // with the name authorization
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret
};
// :: Create JWT strategy ::
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // See if the user ID in the payload exists in our database
  // If it does => call 'done' with that user
  // otherwise, call done without a user object
  User.findById(payload.sub, function(err, user) {
    if (err) {
      return done(err, false);
    }
    // if found => done with user
    // if could not find a user => done with false
    if (user) {
      return done(null, user);
    } else {
      done(null, false);
    }
  });
});
// :: Tell passport tu use this strategy ::
passport.use(jwtLogin);
passport.use(localLogin);
