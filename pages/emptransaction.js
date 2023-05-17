import Sidebar from "../components/Sidebar";
import BurgerDropDown from "@/components/empsidebardropdown";
import logo from "../public/logo.svg";
import Image from "next/image";
import { useState, useEffect } from "react";
export const emptransaction = () => {
  const [history, setHistory] = useState([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    if (localStorage.getItem("admintoken") == null) {
      window.location.href = "http://localhost:3000/admin";
    }

    fetch("http://localhost:3000/api/totalDonations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("admintoken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const username = data[0].FirstName + " " + data[0].LastName;
        setUsername(username);
        setHistory(data[1]);
      });
  }, []);

  if (!username) {
    return null;
  }
  return (
    <div>
      <div className="main lg:flex hidden">
        <div className=" w-11/12 h-auto lg:flex hidden">
          <Sidebar username={username}></Sidebar>
          <div className=" statsdiv ml-10 w-11/12 h-auto overflow-y-scroll">
            <div className="donationhistory mt-2 flex flex-col">
              <p className="lato-25-blue mt-2 ml-4">Transaction History</p>
              <table className="table ">
                <thead>
                  <tr className="tableheadings">
                    <th>Name</th>
                    <th>Institution</th>
                    <th>Amount Donated</th>
                    <th>Date of Donation</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((item, index) => {
                    const date = new Date(item.date);
                    const formattedDate = date.toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    });
                    item.date = formattedDate;

                    return (
                      <tr className="tablerows" key={index}>
                        <td>{item.fname} {item.lname}</td>
                        <td>{item.institution}</td>
                        <td>{item.amount}</td>
                        <td>{item.date}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="main2  lg:hidden flex">
        <div className=" w-screen flex-col h-auto lg:hidden flex">
          <div className="flex flex-row w-screen p-5 mb-4 h-14 blue-bg items-center justify-between">
            <Image src={logo} width={45} height={45} alt="Logo" />
            <BurgerDropDown />
          </div>
          <div className=" statsdiv ml-10 w-11/12 h-auto overflow-y-scroll">
            <select name="timesort" className="timesort">
              <option>This Month</option>
              <option>This Week</option>
              <option>This Year</option>
            </select>
            <div className="donationhistory mt-2 p-2 flex flex-col">
              <p className="lato-20-blue font-bold mt-2 ml-2">
                Transaction History
              </p>
              <table className="table ">
                <thead>
                  <tr className="tableheadings">
                    <th>Name</th>
                    <th>Institution</th>
                    <th>Amount Donated</th>
                    <th>Date of Donation</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((item, index) => {
                    const date = new Date(item.date);
                    const formattedDate = date.toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    });
                    item.date = formattedDate;

                    return (
                      <tr className="tablerows" key={index}>
                        <td>{item.fname} {item.lname}</td>
                        <td>{item.institution}</td>
                        <td>{item.amount}</td>
                        <td>{item.date}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default emptransaction;
