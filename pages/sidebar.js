import Link from "next/link";
import transactionhistory from "./transactionhistory";

export const sidebar = () => {
  return (
    <div className="sidebar flex flex-col justify-between pr-4 pl-2">
      <div className="flex flex-row mt-3">
        <div className="outercircle ml-4">
          <div className=" pr-4 pl-4 pt-3 pb-3 flex flex-col justify-center">
            <div className="innercircle"></div>
            <div className="semicircle"></div>
          </div>
        </div>
        <p className="line mt-3 ml-2">Name Goes Here</p>
      </div>
      <Link className="link" href="/userdashboard">
        <div className="button1 flex flex-row justify-center pt-8 pb-8">
          <img src="/apps.svg" alt="Graphic Elements" />
          <p className="lato-16-white ml-4">Dashboard</p>
        </div>
      </Link>
      <Link href="/transactionhistory" className="link">
        <div className="button1 flex flex-row justify-center pt-8 pb-8">
          <img src="/coins.svg" alt="Graphic Elements" />
          <p className="lato-16-white ml-4">Transaction History</p>
        </div>
      </Link>
      <Link href="/transactionhistory" className="link">
        <div className="button1 flex flex-row justify-center pt-8 pb-8">
          <img src="/search.svg" alt="Graphic Elements" />
          <p className="lato-16-white ml-4">Explore Cases</p>
        </div>
      </Link>
      <Link href="/transactionhistory" className="link">
        <div className="button1 flex flex-row justify-center pt-8 pb-8">
          <img src="/exit.svg" alt="Graphic Elements" />
          <p className="lato-16-white ml-4">Logout</p>
        </div>
      </Link>
    </div>
  );
};

export default sidebar;