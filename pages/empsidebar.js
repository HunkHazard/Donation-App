import Link from "next/link";
import { useRouter } from "next/router"
export const usersidebar = () => {
  const router = useRouter();

  const isActiveLink = (href) => {
    return router.pathname === href ? "active-link bg-gray-600 rounded-full " : "";
  }
  return (
    <div className="sidebar flex flex-col justify-around items-start pl-3 pr-3 w-max">
      <div className="flex flex-row mt-3 items-center justify-center">
        <div className="outercircle ">
          <div className=" pr-4 pl-4 pt-3 pb-3 flex flex-col justify-center">
            <div className="innercircle"></div>
            <div className="semicircle"></div>
          </div>
        </div>
        <p className="line ml-2">Name Goes Here</p>
      </div>
      <Link className={`link w-full ${isActiveLink("/empdashboard")}`} href="/empdashboard" >
        <div className=" rounded-full h-auto cursor-pointer w-full hover:bg-gray-600 flex flex-row justify-start p-[20px]">
          <img src="/apps.svg" alt="Graphic Elements" />
          <p className="lato-16-white ml-4">Dashboard</p>
        </div>
      </Link>
      <Link href="/emptransaction" className={`link w-full ${isActiveLink("/emptransaction")}`}>
        <div className="rounded-full h-auto cursor-pointer w-max hover:bg-gray-600 flex flex-row justify-start p-[20px]">
          <img src="/coins.svg" alt="Graphic Elements" />
          <p className="lato-16-white ml-4">Transaction History</p>
        </div>
      </Link>
      <Link href="/addcases" className={`link w-full ${isActiveLink("/addcases")}`}>
        <div className="rounded-full h-auto cursor-pointer w-full hover:bg-gray-600 flex flex-row justify-start p-[20px]">
          <img src="/search.svg" alt="Graphic Elements" />
          <p className="lato-16-white ml-4">Add Cases</p>
        </div>
      </Link>
      <Link href="/" className={`link w-full ${isActiveLink("/")}`}>
        <div className="rounded-full h-auto cursor-pointer w-full hover:bg-gray-600 flex flex-row justify-start p-[20px]">
          <img src="/exit.svg" alt="Graphic Elements" />
          <p className="lato-16-white ml-4">Logout</p>
        </div>
      </Link>
    </div>
  );
};

export default usersidebar;