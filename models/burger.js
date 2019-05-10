var orm = require("../config/orm.js");

var burger = {
  allBurgers: function(cb) {
    orm.selectAll("*", "burgers", res => {
      cb(res);
    });
  },

  createBurger: function(tableName, colName, newBurgerName, cb) {
    orm.insertOne("burgers", "burger_name", newBurgerName, res => {
      cb(res);
    });
  },

  updateBurger: function(tableName, colName, newValue, id, cb) {
    orm.updateOne("burgers", "devoured", true, id, res => {
      cb(res);
    });
  }
};

module.exports = burger;
