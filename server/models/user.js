const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const Schema = mongoose.Schema;

// Define user model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true, required: true },
  password: { type: String, required: true }
});

// Encrypt password on save-hook
// Before saving a model, run this function
userSchema.pre("save", function(next) {
  // Get access to the user model
  const user = this;
  // generate a salt then run callback
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }
    // hash (encrypt) password using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }
      //overwrite plain text password with hashed password
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  const user = this;
  bcrypt.compare(candidatePassword, user.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    return cb(null, isMatch);
  });
};

// Create the model class - represents collection of all users
const User = mongoose.model("user", userSchema);
// Export the model
module.exports = User;
