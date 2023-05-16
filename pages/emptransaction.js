import Sidebar from "./empsidebar";

export const emptransaction = () => {
  return (
    <div className=" main">
      <Sidebar></Sidebar>
      <div className=" w-5/6 h-5/6 lg:flex hidden">
      <div className=" statsdiv ml-10 w-11/12 h-auto overflow-y-scroll">
        <select name="timesort" className="timesort">
          <option>This Month</option>
          <option>This Week</option>
          <option>This Year</option>
        </select>
        <div className="donationhistory mt-2 flex flex-col">
          <p className="lato-25-blue mt-2 ml-4">Donation History</p>
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
            </tbody>
          </table>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default emptransaction;