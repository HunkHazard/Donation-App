// Import the 'mysql2' library to create a connection to a MySQL database
const mysql = require("mysql2");
import { redirect } from "next/dist/server/api-utils";

// Create a new connection object to the MySQL database using the provided configuration options
const connection = mysql.createConnection({
  host: "localhost", // The hostname where the database is hosted
  user: "root", // The username to use when connecting to the database
  // password: "vader1064", // The password to use when connecting to the database
  password: "12345",
  database: "Donations", // The name of the database to connect to
});

// Define an empty function for the Next.js route handler
// export async function handler(req, res) {
//   redirect(res, "/404");
// }

// Export the 'connection' object to be used in other modules
module.exports = connection;
