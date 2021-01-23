var express = require("express");
var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  res.redirect("/index");
});

router.get("/index", function (req, res) {
  burger.selectAll(function(data) {
    var hbsObject = { burgers: data };
    //console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burger/create", function (req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect("/index");
  });
});

router.post("/burger/eat/:id", function (req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect("/index");
  });
});

router.delete("/burger/create/:id", function(req, res){
  var condition = "id = " + req.params.id;
  burger.deleteOne(condition, function(result){
    if (result.affectedRows == 0) {
      return res.status(404).end();
  } else {
      res.status(200).end();
  }
  })
})

// Export routes for server.js to use.
module.exports = router;