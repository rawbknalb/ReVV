//Include the exporter module
const exporter = require("highcharts-export-server");

exports.renderChart = function(req, res, next) {
  exporter.initPool();
  const img = exporter.export(req.query, function(err, exp) {
    //The export result is now in res.
    //If the output is not PDF or SVG, it will be base64 encoded (exp.data).
    //If the output is a PDF or SVG, it will contain a filename (exp.filename).
    //Kill the pool when we're done with it, and exit the application
    res.json({ img: exp.data });
    exporter.killPool();
  });
};
