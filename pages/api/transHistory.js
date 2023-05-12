const db = require("./dbConnect");
const verifyToken = require("./verifyToken");
import { redirect } from "next/dist/server/api-utils";

async function getUserData(email) {
  const sql_query = `
  SELECT Do.FirstName as FirstName, Do.LastName as LastName,
  P.Name as project, I.Name as institution, Amount as amount, D.DonationDate as date
  FROM Donation AS D  
  JOIN Donor AS Do ON D.DonorID = Do.DonorID  
  JOIN Project AS P ON D.ProjectID = P.ProjectID  
  JOIN Institution AS I ON P.InstitutionID = I.InstitutionID 
  where email = ?
  `;
  try {
    const userData = await db.promise().query(sql_query, [email]);
    // console.log(userData[0]);
    return userData[0];
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
