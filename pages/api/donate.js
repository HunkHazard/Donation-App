const db = require("./dbConnect");
const verifyToken = require("./verifyToken");
import { redirect } from "next/dist/server/api-utils";

async function transaction(email, pid, amount) {
  const donor_query = `
    SELECT DonorID
    FROM Donor
    WHERE email = ?
    `;

  const donation_query = `
    INSERT INTO Donation (DonorID, ProjectID, Amount, DonationDate)
    VALUES (?, ?, ?, NOW())
    `;

  try {
    const donor = await db.promise().query(donor_query, [email]);

    // console.log(donor[0][0].DonorID);
    // console.log(project[0][0].InstitutionID);
    await db
      .promise()
      .query(donation_query, [donor[0][0].DonorID, pid, parseInt(amount)]);
  } catch (err) {
    console.log("ERROR TRANSACTION");
    console.log(err);
    throw new Error("Error in transaction");
  }
}

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const email = await verifyToken(req);
      // console.log(email);
      await transaction(email, req.body.pid, req.body.amount);

      res.status(200).json("success");
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  } else {
    redirect(res, "/404");
  }
}
