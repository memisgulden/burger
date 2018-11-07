var express = require("express");
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static(process.cwd() + "/public"));

// Parse application body as JSON
app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("../burger/controllers/burger_controller.js");
app.use("/", routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
