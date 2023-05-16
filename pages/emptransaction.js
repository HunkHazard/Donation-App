import Sidebar from "./empsidebar";
import BurgerDropDown from "@/components/empsidebardropdown";
import logo from "../public/logo.svg";
import Image from "next/image";
export const emptransaction = () => {
  return (
    <div >
      <div className="main lg:flex hidden">
        <div className=" w-11/12 h-auto lg:flex hidden">
          <Sidebar></Sidebar>
          <div className=" statsdiv ml-10 w-11/12 h-auto overflow-y-scroll">
            <select name="timesort" className="timesort">
              <option>This Month</option>
              <option>This Week</option>
              <option>This Year</option>
            </select>
            <div className="donationhistory mt-2 flex flex-col">
              <p className="lato-25-blue mt-2 ml-4">Transaction History</p>
              <table className="table ">
                <thead>
                  <tr className="tableheadings">
                    <th>Name</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tablerows">
                    <td>Case ka title goes here</td>
                    <td>Elementary School</td>
                    <td>21 Jun 2023</td>
                    <td>PKR 10,000</td>
                    <td>

                    </td>
                  </tr>
                  <tr className="tablerows">
                    <td>Case ka title goes here</td>
                    <td>Elementary School</td>
                    <td>21 Jun 2023</td>
                    <td>PKR 10,000</td>
                    <td>
                    </td>
                  </tr>
                  <tr className="tablerows">
                    <td>Case ka title goes here</td>
                    <td>Elementary School</td>
                    <td>21 Jun 2023</td>
                    <td>PKR 10,000</td>
                    <td>
                    </td>
                  </tr>
                  <tr className="tablerows">
                    <td>Case ka title goes here</td>
                    <td>Elementary School</td>
                    <td>21 Jun 2023</td>
                    <td>PKR 10,000</td>
                    <td>
                    </td>
                  </tr>
                  <tr className="tablerows">
                    <td>Case ka title goes here</td>
                    <td>Elementary School</td>
                    <td>21 Jun 2023</td>
                    <td>PKR 10,000</td>
                    <td>
                    </td>
                  </tr>
                  <tr className="tablerows">
                    <td>Case ka title goes here</td>
                    <td>Elementary School</td>
                    <td>21 Jun 2023</td>
                    <td>PKR 10,000</td>
                    <td>

                    </td>
                  </tr>
                  <tr className="tablerows">
                    <td>Case ka title goes here</td>
                    <td>Elementary School</td>
                    <td>21 Jun 2023</td>
                    <td>PKR 10,000</td>
                    <td>

                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="main2  lg:hidden flex">
        <div className=" w-screen flex-col h-auto lg:hidden flex">
          <div className="flex flex-row w-screen p-5 mb-4 h-14 blue-bg items-center justify-between">
            <Image
              src={logo}
              width={45}
              height={45}
              alt="Logo"
            />
            <BurgerDropDown />
          </div>
          <div className=" statsdiv ml-10 w-11/12 h-auto overflow-y-scroll">
            <select name="timesort" className="timesort">
              <option>This Month</option>
              <option>This Week</option>
              <option>This Year</option>
            </select>
            <div className="donationhistory mt-2 p-2 flex flex-col">
              <p className="lato-20-blue font-bold mt-2 ml-2">Transaction History</p>
              <table className="table ">
                <thead>
                  <tr className="tableheadings">
                    <th>Name</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tablerows secular-14px-upper">
                    <td>Case ka title goes here</td>
                    <td>Elementary School</td>
                    <td>21 Jun 2023</td>
                    <td>PKR 10,000</td>
                    <td>
                    </td>
                  </tr>
                  <tr className="tablerows secular-14px-upper">
                    <td>Case ka title goes here</td>
                    <td>Elementary School</td>
                    <td>21 Jun 2023</td>
                    <td>PKR 10,000</td>
                    <td>
                    </td>
                  </tr>
                  <tr className="tablerows secular-14px-upper">
                    <td>Case ka title goes here</td>
                    <td>Elementary School</td>
                    <td>21 Jun 2023</td>
                    <td>PKR 10,000</td>
                    <td>
                    </td>
                  </tr>
                  <tr className="tablerows secular-14px-upper">
                    <td>Case ka title goes here</td>
                    <td>Elementary School</td>
                    <td>21 Jun 2023</td>
                    <td>PKR 10,000</td>
                    <td>
                    </td>
                  </tr>
                  <tr className="tablerows secular-14px-upper">
                    <td>Case ka title goes here</td>
                    <td>Elementary School</td>
                    <td>21 Jun 2023</td>
                    <td>PKR 10,000</td>
                    <td>
                    </td>
                  </tr>

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