// :: Import Controllers ::
const History = require("./controllers/historyChart/historyChart");
// :: Import Services ::

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.send("Welcome");
  });
  app.get("/history", History.renderChart);
};
