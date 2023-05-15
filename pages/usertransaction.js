import Sidebar from "@/components/Sidebar";
import { useState, useEffect } from "react";

export const usertransaction = () => {
  const [transHistory, setTransHistory] = useState([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/login";
    }

    fetch("http://localhost:3000/api/transHistory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsername(data[0].FirstName + " " + data[0].LastName);
        setTransHistory(data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!username) {
    return null;
  }

  return (
    <div className=" main">
      <Sidebar username={username}></Sidebar>
      <div className=" w-full h-auto lg:flex hidden">
        <div className=" statsdiv overflow-y-scroll ml-10 w-11/12 h-auto">
          <select name="timesort" className="timesort">
            <option>This Month</option>
            <option>This Week</option>
            <option>This Year</option>
          </select>
          <div className="donationhistory mt-2 flex flex-col ">
            <p className="lato-25-blue font-bold mt-2 ml-4">Donation History</p>
            <table className="table ">
              <thead>
                <tr className="tableheadings">
                  <th>Name</th>
                  <th>Institution</th>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {transHistory[1].length === 0 ? (
                  <tr className="tableheadings">
                    <td>No Transactions</td>
                  </tr>
                ) : (
                  transHistory[1].map((tuple, index) => {
                    return (
                      <tr className="tablerows">
                        <td>{tuple.project}</td>
                        <td>{tuple.institution}</td>
                        <td>{tuple.date}</td>
                        <td>{tuple.amount}</td>
                        <td>
                          <a>VIEW RECEIPT</a>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default usertransaction;
