var orm = require("../config/orm.js");

var burger = {
  allBurgers: function(cb) {
    orm.selectAll("*", "burgers", res => {
      cb(res);
    });
  },

  createBurger: function(tableName, colName, valueToInsert, cb) {
    orm.insertOne("burgers", colName, valueToInsert, res => {
      cb(res);
    });
  },

  updateBurger: function(tableName, colName, newValue, id, cb) {
    orm.updateOne(tableName, colName, newValue, id, res => {
      cb(res);
    });
  }
};

module.exports = burger;
