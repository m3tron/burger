var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", (req, res) => {
  burger.allBurgers(data => {
    var burgerObject = {
      burger: data
    };

    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

router.get("/api/burgers", (req, res) => {
  burger.allBurgers(data => {
    res.json(data);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.createBurger(req.body.burger_name, data => {
    console.log(data);
    res.json({ data });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  var id = req.params.id;
  console.log(id);

  burger.updateBurger(id, data => {
    console.log(data);
    res.json(data);
  });
});

module.exports = router;
