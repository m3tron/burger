var connection = require("./connections.js");

var orm = {
  selectAll: function(colName, tableName, cb) {
    var query = "SELECT ?? FROM ??";

    connection.query(query, [colName, tableName], (err, result) => {
      if (err) throw err;

      cb(result);
    });
  },
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
  updateOne: function(tableName, colName, val, id, cb) {
    var query = "UPDATE ?? SET ??=? WHERE id=?";

    connection.query(query, [tableName, colName, val, id], (err, result) => {
      if (err) throw err;

      cb(result);
    });
  }
};

module.exports = orm;
