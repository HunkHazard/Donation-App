const mysql = require("mysql2");

// db connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "vader1064",
  // password: "12345", // ahad
  database: "Donations",
});

// Export the 'connection' object to be used in other modules
module.exports = connection;
