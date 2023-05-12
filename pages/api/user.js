const connection = require("./dbConnect");
const verifyToken = require("./verifyToken");
import { redirect } from "next/dist/server/api-utils";

async function getUserData(email) {
  const sql_query =
    "SELECT FirstName, LastName, Email FROM Donor WHERE email = ?";
  try {
    const results = await connection.promise().query(sql_query, [email]);
    if (results[0].length == 0) {
      // if the email does not exist in the database, throw an error
      // this will be caught in the catch block
      throw new Error("Email does not exist");
    } else {
      // if the email exists, resolve the promise with the actual password
      return results;
    }
  } catch (err) {
    // catch the error and throw it again
    // this will be caught in the catch block of the handler function
    throw err;
  }
}

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const email = verifyToken(req);
      const results = await getUserData(email);
      res.status(200).json({ results });
    } catch (err) {
      res.status(401).json({ message: err });
    }
  } else {
    redirect(res, "/404");
  }
}
