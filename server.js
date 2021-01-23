var express = require("express");
var bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

var app = express();
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));


var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


var router = require("./controllers/burgers_controllers.js");
app.use("/", router);


var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });