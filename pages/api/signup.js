const connection = require("./dbConnect");
const bcrypt = require("bcryptjs");
import { redirect } from "next/dist/server/api-utils";

async function addToDB(req) {
  const firstName = req.body.payload.firstName;
  const lastName = req.body.payload.lastName;
  const email = req.body.payload.email;
  const phone = req.body.payload.phone;
  const city = req.body.payload.city;
  const province = req.body.payload.province;

  // encrypt the password before storing it in the database
  const salt = bcrypt.genSaltSync(10);
  const password = bcrypt.hashSync(req.body.payload.password, salt);

  const sql_query =
    "INSERT INTO Donor (firstName, lastName, email, phone, password, city, province) VALUES (?, ?, ?, ?, ?, ?, ?)";

  try {
    await connection
      .promise()
      .query(sql_query, [
        firstName,
        lastName,
        email,
        phone,
        password,
        city,
        province,
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
