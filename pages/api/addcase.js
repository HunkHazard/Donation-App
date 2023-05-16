const connection = require("./dbConnect");
const verifyToken = require("./verifyToken");
import { redirect } from "next/dist/server/api-utils";

async function registerInstitute(iname, address, province) {
  const query = `INSERT INTO Institution (Name, Address, Province) VALUES (?, ?, ?)`;
  const [rows, fields] = await connection
    .promise()
    .query(query, [iname, address, province]);
}

async function registerCase(req) {
  const { pname, iname, desc, amount, address, province } = req.body;

  const instituteID_query = `SELECT InstitutionID FROM Institution WHERE Name = ? AND Address = ? AND Province = ?`;

  const [rows, fields] = await connection
    .promise()
    .query(instituteID_query, [iname, address, province]);
  const instituteID = rows[0].InstitutionID;

  const query = `Insert into Project (Name, Description, Required, InstitutionID) VALUES (?, ?, ?, ?)`;
  try {
    const [rows1, fields1] = await connection
      .promise()
      .query(query, [pname, desc, amount, instituteID]);
  } catch (err) {
    throw err;
  }
  console.log("Case Registered Successfully");
}

async function instituteCheck(req) {
  const { iname, address, province } = req.body;
  const query = `SELECT * FROM Institution WHERE Name = ? AND Address = ? AND Province = ?`;
  const [rows, fields] = await connection
    .promise()
    .query(query, [iname, address, province]);
  if (rows.length == 0) {
    console.log("New Institution");
    try {
      await registerInstitute(iname, address, province);
      await registerCase(req);
    } catch (err) {
      throw err;
    }
  } else {
    console.log("Old Institution");
    try {
      await registerCase(req);
    } catch (err) {
      throw err;
    }
  }
}

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const email = await verifyToken(req);
      //   console.log(email);
      await instituteCheck(req);
      res.status(200).json({ message: "Case Registered Successfully" });
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  } else {
    redirect(res, "/404");
  }
}
