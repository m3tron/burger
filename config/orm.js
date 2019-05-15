var connection = require("./connections.js");

var orm = {
  //function to acquire all burgers
  selectAll: function(colName, tableName, cb) {
    var query = "SELECT ?? FROM ??";

    connection.query(query, [colName, tableName], (err, result) => {
      if (err) throw err;

      cb(result);
    });
  },
  //function to add a burger
  insertOne: function(tableName, colName, insertValue, cb) {
    var query = "INSERT INTO ?? (??) VALUES (?)";

    connection.query(
      query,
      [tableName, colName, insertValue],
      (err, result) => {
        if (err) throw err;

        cb(result);
      }
    );
  },
  //function to update a burger if devoured
  updateOne: function(tableName, colName, val, id, cb) {
    var query = "UPDATE ?? SET ??=? WHERE id=?";

    connection.query(query, [tableName, colName, val, id], (err, result) => {
      if (err) throw err;

      cb(result);
    });
  }
};

module.exports = orm;
