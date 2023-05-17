const connection = require("./dbConnect");
const bcrypt = require("bcryptjs");
import { redirect } from "next/dist/server/api-utils";

async function addToDB(req) {
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const Email = req.body.Email;
  const Phone = req.body.Phone;
  const City = req.body.City;
  const Province = req.body.Province;

  // encrypt the password before storing it in the database
  const salt = bcrypt.genSaltSync(10);
  const Password = bcrypt.hashSync(req.body.Password, salt);

  const sql_query =
    "INSERT INTO Donor (FirstName, LastName, Email, Phone, Password, City, Province) VALUES (?, ?, ?, ?, ?, ?, ?)";

  try {
    await connection
      .promise()
      .query(sql_query, [
        FirstName,
        LastName,
        Email,
        Phone,
        Password,
        City,
        Province,
      ]);
  } catch (err) {
    throw err;
  }
}

async function emailCheck(email) {
  const sql_query = "SELECT email FROM Donor WHERE email = ?";

  try {
    const results = await connection.promise().query(sql_query, [email]);
    if (results[0].length == 0) {
      return true;
    } else {
      // console.log(results);
      throw new Error("Email already exists");
    }
  } catch (err) {
    throw err;
  }
}

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      // console.log(req);
      await emailCheck(req.body.email);
      await addToDB(req);
      res.status(200).json({ message: "Signup successful" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  } else {
    redirect(res, "/404");
  }
}

