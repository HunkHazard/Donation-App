import { redirect } from "next/dist/server/api-utils";

const connection = require("./dbConnect");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function getPassword(email) {
  const sql_query = "SELECT password FROM Donor WHERE email = ?";

  try {
    const results = await connection.promise().query(sql_query, [email]);
    if (results[0].length == 0) {
      // if the email does not exist in the database, throw an error
      // this will be caught in the catch block
      throw new Error("Email does not exist");
    } else {
      // if the email exists, resolve the promise with the actual password
      const actualPassword = results[0][0].password;
      return actualPassword;
    }
  } catch (err) {
    // catch the error and throw it again
    // this will be caught in the catch block of the handler function
    throw err;
  }
}

export default async function handler(req, res) {
  if (req.method == "POST") {
    const email = req.body.payload.email;
    const loginPassword = req.body.payload.password;

    try {
      const actualPassword = await getPassword(email);
      const passwordMatch = await bcrypt.compare(loginPassword, actualPassword);

      if (passwordMatch) {
        // create a token
        const token = jwt.sign({ email: email }, "my_key", {
          expiresIn: "1h",
        });
        // console.log(token);
        res.status(200).json({ message: "Login successful", token });
      } else {
        throw new Error("Invalid Password");
      }
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  } else {
    redirect(res, "/404");
  }
}
