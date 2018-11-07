var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("../burger/controllers/burger_controller.js");
app.use("/", routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
