var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", (req, res) => {
  burger.allBurgers(data => {
    /*  var burgerObject = {
      burger: data
    }; */

    console.log(data);
    res.render("index", data);
  });
});

module.exports = router;
