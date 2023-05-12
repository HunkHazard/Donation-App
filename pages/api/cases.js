// this returns a list of all the cases in the database
// the user need not be logged in to view the cases
// so no need to verify the token

// this will be used to redirect the user to the 404 page if they try to access the page using GET
import { redirect } from "next/dist/server/api-utils";
const connection = require("./dbConnect");

// an async function to connect to the database, run a query, and return the results
async function cases(query) {
  try {
    const results = await connection.promise().query(query);
    return results[0];
  } catch (e) {
    throw new Error(e);
  }
}

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const sql_query = `
    select P.ProjectID as pid, P.Name as pname,I.InstitutionID as iid, I.Name as iname, 
    P.Description as pdesc, P.Required as required, P.Collected as collected
    from Project as P
    join Institution as I 
    on P.InstitutionID = I.InstitutionID
    `;
      const result = await cases(sql_query);
      console.log(result);
      res.status(200).json(result);
    } catch (e) {
      console.log(e);
    }
  } else if (req.method == "GET") {
    redirect(res, "/404");
  }
}
