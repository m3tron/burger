var orm = require("../config/orm.js");

var burger = {
  allBurgers: function(cb) {
    orm.selectAll("*", "burgers", res => {
      cb(res);
    });
  },

  createBurger: function(newBurgerName, cb) {
    orm.insertOne("burgers", "burger_name", newBurgerName, res => {
      cb(res);
    });
  },

  updateBurger: function(id, cb) {
    orm.updateOne("burgers", "devoured", true, id, res => {
      cb(res);
    });
  }
};

module.exports = burger;
