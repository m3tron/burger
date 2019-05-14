var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin123",
  port: 3306,
  database: "burgers_db"
});

connection.connect(err => {
  if (err) {
    console.log(`Connection Error: ${err.stack}`);
  }
  console.log(`Connected as id: ${connection.threadId}`);
});

module.exports = connection;
