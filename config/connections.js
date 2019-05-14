var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin123",
    database: "burgers_db"
  });
}

connection.connect(err => {
  if (err) {
    console.log(`Connection Error: ${err.stack}`);
  }
  console.log(`Connected as id: ${connection.threadId}`);
});

module.exports = connection;
