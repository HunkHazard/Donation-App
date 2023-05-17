const db = require("./dbConnect");
const verifyToken = require("./verifyToken");
import { redirect } from "next/dist/server/api-utils";

async function getUserData(email) {
  const trans_query = `
  SELECT
  Do.FirstName as fname, Do.LastName as lname, I.Name as institution, Amount as amount, D.DonationDate as date
  FROM Donation AS D  
  JOIN Donor AS Do ON D.DonorID = Do.DonorID  
  JOIN Project AS P ON D.ProjectID = P.ProjectID  
  JOIN Institution AS I ON P.InstitutionID = I.InstitutionID 
  `;

  const username_query = `
  SELECT FirstName, LastName
  FROM Admin
  WHERE email = ?
  `;
  try {
    const transData = await db.promise().query(trans_query);
    const username = await db.promise().query(username_query, [email]);
    console.log(transData[0]);
    // console.log(username[0]);
    return [username[0][0], transData[0]];
  } catch (err) {
    console.log("ERROR TRANSHISTORY");
    console.log(err);
    throw new Error("Error in getting user transaction history");
  }
}

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const email = await verifyToken(req);
      console.log(email);
      const transHistory = await getUserData(email);
      console.log(transHistory);
      res.status(200).json(transHistory);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  } else {
    redirect(res, "/404");
  }
}
