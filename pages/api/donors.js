//  import the connection object from the dbConnect module
const connection = require("./dbConnect");

// creating a default handler function
export default function handler(req, res) {
  
  connection.query(
    "SELECT FirstName,LastName,City,Province FROM Donor",
    (err, results) => {
      res.status(200).json(results);
    }
  );
}
