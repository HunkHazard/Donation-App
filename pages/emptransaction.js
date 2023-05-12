import Sidebar from "./sidebar";

export const transactionhistory = () => {
  return (
    <div className="main">
      <Sidebar></Sidebar>
      <div className="statsdiv">
        <select name="timesort" className="timesort">
          <option>This Month</option>
          <option>This Week</option>
          <option>This Year</option>
        </select>
        <div className="donationhistory">
          <p className="lato-25-blue mt-2 ml-2">Donation History</p>
          <table className="table">
            <thead>
              <tr className="tableheadings">
                <th>Title</th>
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
                <td></td>
              </tr>
              <tr className="tablerows">
                <td>Case ka title goes here</td>
                <td>Elementary School</td>
                <td>21 Jun 2023</td>
                <td>PKR 10,000</td>
                <td></td>
              </tr>
              <tr className="tablerows">
                <td>Case ka title goes here</td>
                <td>Elementary School</td>
                <td>21 Jun 2023</td>
                <td>PKR 10,000</td>
                <td></td>
              </tr>
              <tr className="tablerows">
                <td>Case ka title goes here</td>
                <td>Elementary School</td>
                <td>21 Jun 2023</td>
                <td>PKR 10,000</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default transactionhistory;