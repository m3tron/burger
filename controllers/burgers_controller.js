var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

//show all burgers to main page
router.get("/", (req, res) => {
  burger.allBurgers(data => {
    var burgerObject = {
      burger: data
    };
    res.render("index", burgerObject);
  });
});

//create api page with all data
router.get("/api/burgers", (req, res) => {
  burger.allBurgers(data => {
    res.json(data);
  });
});

//post a new burger in api
router.post("/api/burgers", (req, res) => {
  burger.createBurger(req.body.burger_name, data => {
    res.json({ data });
  });
});

//update a burger if devoured
router.put("/api/burgers/:id", (req, res) => {
  var id = req.params.id;
  burger.updateBurger(id, data => {
    res.json(data);
  });
});

module.exports = router;
