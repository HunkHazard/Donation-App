const connection = require("./dbConnect");
const verifyToken = require("./verifyToken");
import { redirect } from "next/dist/server/api-utils";

async function cases() {
  const query = `
  select P.ProjectID as pid, P.Name as pname,I.InstitutionID as iid, I.Name as iname, 
  P.Description as pdesc, P.Required as required, P.Collected as collected
  from Project as P
  join Institution as I 
  on P.InstitutionID = I.InstitutionID
  `;

  try {
    const results = await connection.promise().query(query);
    return results[0];
  } catch (e) {
    throw new Error(e);
  }
}

async function getStats() {
  const all_time_query = `SELECT SUM(Amount) AS TotalDonatedAmount
  FROM Donation`;

  const today_query = `SELECT SUM(Amount) AS TotalToday
  FROM Donation
  WHERE DATE(DonationDate) = CURDATE()
  `;

  const this_month_query = `SELECT SUM(Amount) AS TotalThisMonth
  FROM Donation
  WHERE MONTH(DonationDate) = MONTH(CURDATE())
  AND YEAR(DonationDate) = YEAR(CURDATE())
  `;

  const this_year_query = `SELECT SUM(Amount) AS TotalThisYear
  FROM Donation
  WHERE YEAR(DonationDate) = YEAR(CURDATE())
  `;

  const this_week_query = `SELECT SUM(Amount) AS TotalThisWeek
  FROM Donation
  WHERE YEARWEEK(DonationDate) = YEARWEEK(CURDATE())
  `;

  try {
    const all_time = await connection.promise().query(all_time_query);
    const today = await connection.promise().query(today_query);
    const this_month = await connection.promise().query(this_month_query);
    const this_year = await connection.promise().query(this_year_query);
    const this_week = await connection.promise().query(this_week_query);
    return [
      all_time[0][0],
      today[0][0],
      this_month[0][0],
      this_year[0][0],
      this_week[0][0],
    ];
  } catch (err) {
    console.log(err);
  }
}

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
      const stats = await getStats();
      const all_cases = await cases();
      // console.log(results[0][0]);
      console.log(all_cases);
      res
        .status(200)
        .json({ results: results[0][0], stats: stats, cases: all_cases });
    } catch (err) {
      console.log(err);
      res.status(401).json({ message: err });
    }
  } else {
    redirect(res, "/404");
  }
}
