import Sidebar from "../components/Sidebar";
import Image from "next/image";
import arrow from "../public/arrow-small-right.svg";
import casesvg from "../public/OBJECTS.svg";
import BurgerDropDown from "@/components/empsidebardropdown";
import logo from "../public/logo.svg";
import { useState } from "react";
import { useEffect } from "react";

export const empdashboard = () => {
  const [username, setUsername] = useState("");
  const [stats, setStats] = useState([]);
  const [cases, setCases] = useState([]);

  // fetch user data from api/user.js
  useEffect(() => {
    const token = localStorage.getItem("admintoken");
    // if token is not present, redirect to login page
    if (!token) {
      // alert("Please login to view this page");
      window.location.href = "/admin";
    } else {
      // fetch user data
      try {
        fetch("http://localhost:3000/api/admindash", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            if (res.status === 401) {
              throw new Error("Invalid Token - redirect to login");
            } else {
              return res.json();
            }
          })
          .then((data) => {
            // console.log(data.results[0][0]);
            // console.log(data.results);
            // console.log(data.stats);
            // console.log(data.cases);
            const name = data.results.FirstName + " " + data.results.LastName;
            setUsername(name);
            setCases(data.cases);
            // console.log(data.stats);
            setStats(data.stats);
            // console.log(stats);
            console.log(data);
          })
          .catch((err) => {
            console.log(err.message);
            // alert(err.message);
            localStorage.removeItem("admintoken");
            window.location.href = "/admin";
          });
      } catch (err) {
        console.log(err.message);
      }
    }
  }, []);

  useEffect(() => {
    // console.log({ stats });
  }, [stats]);

  // if the user is not logged in, redirected to login page (done to prevent page from loading
  // before useEffect is executed)

  if (!username) {
    return null;
  }

  return (
    <div className="main max-sm:h-max">
      <div className=" lg:flex hidden">
        <Sidebar username={username}></Sidebar>
      </div>
      <div className="statsdiv max-2xl:ml-0 max-lg:mt-0 max-lg:items-center flex flex-col w-full">
        <div className="max-lg:flex hidden">
          <div className=" flex flex-row w-screen p-5 mb-4 h-14 blue-bg items-center justify-between">
            <Image src={logo} width={45} height={45} alt="Logo" />
            <BurgerDropDown />
          </div>
        </div>
        <div className=" flex flex-row mt-4 h-5/6 w-11/12">
          <div className=" flex flex-col h-full w-full overflow-y-scroll">
            <div className="donations mr-3 pr-3 md:flex flex-row hidden">
              <div className="totaldonation pt-2 pb-4 pr-6 pl-1">
                <p className="lato-25-blue font-bold ml-6 pb-6 whitespace-nowrap">
                  Total Donation
                </p>
                <p className="bebas-50px main-text text-5xl text-base/8 pb-6 ml-6 whitespace-nowrap">
                  <r className="bebas-32">PKR</r> <br></br>
                  {stats[0].TotalDonatedAmount}
                </p>
              </div>
              <div className="totaldonation pt-2 pb-4 pr-6 pl-1">
                <p className="lato-25-blue font-bold ml-6 pb-6 whitespace-nowrap">
                  Donation Today
                </p>
                <p className="bebas-50px main-text text-5xl text-base/8 pb-6 ml-6 whitespace-nowrap">
                  <r className="bebas-32">PKR</r> <br></br>
                  {stats[1].TotalToday}
                </p>
              </div>
              <div className="totaldonation pt-2 pb-4 pr-6 pl-1">
                <p className="lato-25-blue font-bold ml-6 pb-6 whitespace-nowrap">
                  Total Donors
                </p>
                <p className="bebas-60px blue-text my-auto text-base/8 pb-6 ml-6 whitespace-nowrap">
                  {stats[6].totalDonors}
                </p>
              </div>
            </div>
            <div className="donations pr-1 mr-3 sm:max-md:flex flex-row hidden ">
              <div className="totaldonation1 pt-2 pb-2 pr-2 flex flex-col justify-between">
                <p className="lato-20-blue font-bold ml-4 whitespace-nowrap">
                  Total Donation
                </p>
                <p className="bebas-50px main-text text-5xl text-base/8 pb-6 ml-6 whitespace-nowrap">
                  <r className="bebas-32">PKR</r> <br></br>
                  {stats[0].TotalDonatedAmount}
                </p>
              </div>
              <div className="totaldonation1 pt-2 pb-2 pr-4 flex flex-col justify-between">
                <p className="lato-20-blue font-bold ml-4 whitespace-nowrap">
                  Donation Today
                </p>
                <p className="bebas-50px main-text text-5xl text-base/8 pb-6 ml-6 whitespace-nowrap">
                  <r className="bebas-32">PKR</r> <br></br>
                  {stats[1].TotalToday}
                </p>
              </div>
              <div className="totaldonation1 pt-2 pb-2 pr-4 flex flex-col justify-between">
                <p className="lato-20-blue font-bold ml-4 whitespace-nowrap">
                  Total Donors
                </p>
                <p className="bebas-60px blue-text my-auto text-base/8 pb-6 ml-6 whitespace-nowrap">
                  {stats[6].totalDonors}
                </p>
              </div>
            </div>
            <div className="max-sm:flex flex-row hidden h-80 overflow-x-scroll">
              <div className="donations pr-1 mr-3 h-max flex flex-row ">
                <div className="totaldonation w-max h-max p-5 flex flex-col mb-2 ">
                  <p className="lato-16-blue font-bold whitespace-nowrap">
                    Total Donation
                  </p>
                  <p className="bebas-40px main-text text-5xl text-base/8 pb-6 mt-2 whitespace-nowrap">
                    <r className="bebas-32">PKR</r> <br></br>
                    {stats[0].TotalDonatedAmount}
                  </p>
                </div>
                <div className="totaldonation w-max h-max p-5 flex flex-col mb-2">
                  <p className="lato-16-blue font-bold whitespace-nowrap">
                    Donation Today
                  </p>
                  <p className="bebas-40px main-text text-5xl text-base/8 pb-6 mt-2 whitespace-nowrap">
                    <r className="bebas-32">PKR</r> <br></br>
                    {stats[1].TotalToday}
                  </p>
                </div>
                <div className="totaldonation w-max h-max p-5 flex flex-col mb-2">
                  <p className="lato-16-blue font-bold whitespace-nowrap">
                    Total Donors
                  </p>
                  <p className="bebas-50px blue-text my-auto text-base/8 pb-6 mt-10 whitespace-nowrap">
                    {stats[6].totalDonors}
                  </p>
                </div>
              </div>
            </div>
            <div className="totaldonation mt-2 md:flex hidden flex-col p-2 justify-between h-full">
              <div className=" flex flex-row">
                <p className=" lato-25-blue font-bold ml-2 mb-2 ">Top Donors</p>
              </div>
              {stats[5].map((tuple, index) => {
                return (
                  <>
                    <div className=" flex flex-row justify-between pb-4">
                      <div className=" flex flex-row">
                        <img
                          src={`/${index + 1}.svg`}
                          alt="Graphic Elements"
                          className=" h-10 ml-2 my-auto"
                        />
                        <p className=" lato-16-blue pl-2 my-auto">
                          {tuple.FirstName + " " + tuple.LastName}
                        </p>
                      </div>
                      <p className=" lato-16-blue mr-2 my-auto">
                        PKR {tuple.amount} Donated
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="fundraising md:flex flex-col hidden h-full p-3 w-auto mt-2 ml-5 ">
              <div className="flex flex-row items-center justify-between">
                <p className="lato-25-blue font-bold">All fundraisings</p>
                <Image
                  className="w-6 h-auto object-cover my-auto"
                  src={arrow}
                  width={287}
                  height={349}
                  alt="cover"
                />
              </div>
              <div className="flex flex-col h-auto mt-2 overflow-y-scroll">
                <div className=" flex flex-col justify-between mt-4">
                  {cases.map((item, index) => {
                    return (
                      <>
                        <div className=" flex flex-col justify-between mt-4">
                          <div className="bg-gray-300 w-11/12 mx-auto h-[1px]"></div>
                          <p className="secular-14px-upper blue-text pb-2 mt-2">
                            CASE # {index + 1} {item.pname}{" "}
                          </p>
                          <div className=" flex flex-row pb-1">
                            <Image
                              className="w-8 h-auto object-cover"
                              src={casesvg}
                              width={287}
                              height={349}
                              alt="cover"
                            />
                            <p className="lato-14-blue ml-1">{item.iname}</p>
                          </div>
                          <div className="flex flex-row items-center justify-between">
                            <div className="progressbar bg-gray-200">
                              <div
                                className="progress"
                                style={{
                                  width: `${parseInt(
                                    (item.collected / item.required) * 100
                                  )}%`,
                                }}
                              ></div>
                            </div>
                            <p className="lato-12-blue font-semibold ml-1">
                              {parseInt((item.collected / item.required) * 100)}%
                            </p>
                          </div>
                          <div className=" flex flex-row pt-1">
                            <p className="lato-12-blue">
                              PKR {item.collected}/{item.required}
                            </p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className=" totaldonation mt-2 sm:max-md:flex flex-col justify-between hidden h-full">
              <div className=" flex flex-row mt-4">
                <p className=" lato-20-blue font-bold text-left ml-2 mb-2">
                  Top Donors
                </p>
              </div>
              {stats[5].map((tuple, index) => {
                return (
                  <>
                    <div className=" flex flex-row justify-between pb-4">
                      <div className=" flex flex-row">
                        <img
                          src={`/${index + 1}.svg`}
                          alt="Graphic Elements"
                          className=" h-8 ml-2"
                        />
                        <p className=" ml-3 lato-16-blue text-left">
                          {tuple.FirstName + " " + tuple.LastName}
                        </p>
                      </div>
                      <p className=" lato-14-blue mr-2">
                        PKR {tuple.amount} Donated
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="fundraising sm:max-md:flex flex-col hidden h-full p-3 w-auto mt-2 ml-3 ">
              <div className="flex flex-row items-center justify-between">
                <p className="lato-25-blue font-bold">All fundraisings</p>
                <Image
                  className="w-6 h-auto object-cover my-auto"
                  src={arrow}
                  width={287}
                  height={349}
                  alt="cover"
                />
              </div>
              <div className="flex flex-col h-auto mt-2 overflow-y-scroll">
                <div className=" flex flex-col justify-between mt-4">
                  {cases.map((item, index) => {
                    return (
                      <>
                        <div className=" flex flex-col justify-between mt-4">
                          <div className="bg-gray-300 w-11/12 mx-auto h-[1px]"></div>
                          <p className="secular-14px-upper blue-text pb-2 mt-2">
                            CASE # {index + 1} {item.pname}{" "}
                          </p>
                          <div className=" flex flex-row pb-1">
                            <Image
                              className="w-8 h-auto object-cover"
                              src={casesvg}
                              width={287}
                              height={349}
                              alt="cover"
                            />
                            <p className="lato-14-blue ml-1">{item.iname}</p>
                          </div>
                          <div className="flex flex-row items-center justify-between">
                            <div className="progressbar bg-gray-200">
                              <div
                                className="progress"
                                style={{
                                  width: `${parseInt(
                                    (item.collected / item.required) * 100
                                  )}%`,
                                }}
                              ></div>
                            </div>
                            <p className="lato-12-blue font-semibold ml-1">
                              {parseInt((item.collected / item.required) * 100)}%
                            </p>
                          </div>
                          <div className=" flex flex-row pt-1">
                            <p className="lato-12-blue">
                              PKR {item.collected}/{item.required}
                            </p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className=" totaldonation max-sm:flex hidden flex-col mt-2">
              <div className=" flex flex-row justify-center mt-4">
                <p className=" lato-20-blue font-bold pb-6 mb-2">Top Donors</p>
              </div>
              {stats[5].map((tuple, index) => {
                return (
                  <>
                    <div className=" flex flex-row justify-between pb-4">
                      <div className=" flex flex-row items-center">
                        <img
                          src={`/${index + 1}.svg`}
                          alt="Graphic Elements"
                          className=" h-8 ml-2"
                        />
                        <p className=" lato-12-blue ml-2">
                          {tuple.FirstName + " " + tuple.LastName}
                        </p>
                      </div>
                      <p className=" lato-12-blue mr-2">
                        PKR {tuple.amount} Donated
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="fundraising max-sm:flex flex-col justify-between hidden p-2 ml-3 mt-4">
              <div className=" flex flex-row justify-between items-center">
                <p className="lato-16-blue font-bold pr-2 pt-2 pl-1">
                  All fundraisings
                </p>
                <img
                  src="/arrow-small-right.svg"
                  alt="Graphic Elements"
                  className=" h-4 float-right"
                />
              </div>
              <div className="flex flex-col h-auto mt-2 overflow-y-scroll">
                <div className=" flex flex-col justify-between mt-4">
                  {cases.map((item, index) => {
                    return (
                      <>
                        <div className=" flex flex-col justify-between mt-4">
                          <div className="bg-gray-300 w-11/12 mx-auto h-[1px]"></div>
                          <p className="secular-14px-upper blue-text pb-2 mt-2">
                            CASE # {index + 1} {item.pname}{" "}
                          </p>
                          <div className=" flex flex-row pb-1">
                            <Image
                              className="w-8 h-auto object-cover"
                              src={casesvg}
                              width={287}
                              height={349}
                              alt="cover"
                            />
                            <p className="lato-14-blue ml-1">{item.iname}</p>
                          </div>
                          <div className="flex flex-row items-center justify-between">
                            <div className="progressbar bg-gray-200">
                              <div
                                className="progress"
                                style={{
                                  width: `${parseInt(
                                    (item.collected / item.required) * 100
                                  )}%`,
                                }}
                              ></div>
                            </div>
                            <p className="lato-12-blue font-semibold ml-1">
                              {parseInt((item.collected / item.required) * 100)}
                              %
                            </p>
                          </div>
                          <div className=" flex flex-row pt-1">
                            <p className="lato-12-blue">
                              PKR {item.collected}/{item.required}
                            </p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default empdashboard;
