// :: Import Controllers ::
const Authentication = require("./controllers/auth/authentication");
const UserData = require("./controllers/userData/userData");
const History = require("./controllers/historyChart/historyChart");
// :: Import Services ::
const passportService = require("./services/passport");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = function(app) {
  app.get("/user", requireAuth, UserData.fetchAssetAllocation);
  app.post("/signin", requireSignin, Authentication.signin);
  app.post("/signup", Authentication.signup);
  app.get("/history", History.renderChart);
};
