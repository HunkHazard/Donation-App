import Image from "next/image";
import heart from "../public/heart.svg";
import OrangeCase from "../public/OrangeSchool.svg";
import { useEffect, useState } from "react";

const Cases = ({ text, required, collected, id }) => {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setCheck(true);
    }
  }, []);

  function donate(pid) {
    if (check == false) {
      alert("Please Login to Donate");
      window.location.href = "/login";
    } else {
      let token = localStorage.getItem("token");
      let amount = prompt("Enter Amount to Donate");
      console.log(amount);
      if (amount > 0) {
        fetch("http://localhost:3000/api/donate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            pid: pid,
            amount: amount,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.error) {
              alert(data.error);
            } else {
              alert(data.message);
              window.location.href = "/usertransaction";
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }
  return (
    <div>
      <div className="lg:flex hidden w-auto h-auto mx-auto mb-8 ">
        <div className="flex flex-row mx-auto w-4/5 bg-gray-100 items-center ">
          <div className="h-[160px] w-[160px] aspect-square border border-main rounded-full float-left overflow-hidden"></div>
          <div className="flex flex-col pl-4 pr-4 w-4/5 justify-between">
            <div className="pt-4 secular-16px-upper w-auto blue-text float-left">
              {text}
            </div>
            <div className="flex flex-row pt-4 pb-4 secular-16px-upper blue-text float-left">
              <div className=" w-11/12 h-2 bg-white my-auto mr-6">
                <div className=" w-7/12 h-2 main-accent my-auto mr-6"></div>
              </div>
              <p>{required}/-</p>
            </div>
            <div className="flex flex-row pb-4 justify-between float-left">
              <button
                onClick={() => {
                  donate(id);
                }}
                className=" flex flex-row items-center my-auto pt-[07px] pb-[08px] pl-[26px] pr-[26px] main-accent hover:bg-pink-800"
              >
                Donate Now
                <Image
                  className="ml-[7px]"
                  src={heart}
                  width={15}
                  height={15}
                  alt="heart"
                />
              </button>
              <p className="lato-16px-0lh-main my-auto">Read More &gt;&gt;</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:max-lg:flex hidden w-auto h-auto mx-auto mb-8">
        <div className="flex flex-row mx-auto w-4/5 bg-gray-100 items-center ">
          <div className="h-[150px] w-[150px] aspect-square border border-main rounded-full float-left"></div>
          <div className="flex flex-col pl-4 pr-4 w-auto justify-between">
            <div className="pt-4 secular-16px-upper w-auto blue-text float-left">
              {text}
            </div>
            <div className="flex flex-row pt-4 pb-4 secular-16px-upper blue-text float-left">
              <div className=" w-11/12 h-2 bg-white my-auto mr-6">
                <div className=" w-7/12 h-2 main-accent my-auto mr-6"></div>
              </div>
              <p>{required}/-</p>
            </div>
            <div className="flex flex-row pb-4 justify-between float-left">
              <button
                onClick={() => {
                  donate(id);
                }}
                className=" flex flex-row items-center my-auto lato-14-white pt-[07px] pb-[08px] pl-[16px] pr-[16px] main-accent hover:bg-pink-800"
              >
                Donate Now
                <Image
                  className="ml-[7px]"
                  src={heart}
                  width={15}
                  height={15}
                  alt="heart"
                />
              </button>
              <p className="lato-16px-0lh-main my-auto">Read More &gt;&gt;</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:max-md:flex hidden w-auto h-auto mx-auto mb-8">
        <div className="flex flex-col pt-4 pl-4 pr-4 w-4/5 mx-auto h-auto bg-gray-100 items-cente">
          <div className="flex flex-row justify-between items-center">
            <Image
              className="object-cover"
              src={OrangeCase}
              width={60}
              height={60}
              alt="heart"
            />
            <div className="secular-14px-upper w-auto blue-text float-left pl-4">
              {text}
            </div>
          </div>
          <div className="flex flex-row pt-8 pb-8 secular-16px-upper blue-text float-left">
            <div className=" w-11/12 h-1 bg-white my-auto mr-6">
              <div className=" w-7/12 h-1 main-accent my-auto mr-6"></div>
            </div>
            <p>{required}/-</p>
          </div>
          <div className="flex flex-row pb-4 justify-between float-left">
            <button
              onClick={() => {
                donate(id);
              }}
              className=" flex flex-row items-center my-auto lato-14-white pt-[07px] pb-[08px] pl-[12px] pr-[12px] main-accent hover:bg-pink-800"
            >
              Donate Now
              <Image
                className="ml-[7px]"
                src={heart}
                width={15}
                height={15}
                alt="heart"
              />
            </button>
            <p className="lato-14px-0lh-main my-auto">Read More &gt;&gt;</p>
          </div>
        </div>
      </div>
      <div className="max-sm:flex hidden w-auto h-auto mx-auto mb-8">
        <div className="flex flex-col pt-4 pl-4 pr-4 w-4/5 mx-auto h-auto bg-gray-100 items-cente">
          <div className="flex flex-row justify-between items-center">
            <Image
              className="object-cover"
              src={OrangeCase}
              width={60}
              height={60}
              alt="heart"
            />
            <div className="secular-14px-upper w-auto blue-text float-left pl-4">
              {text}
            </div>
          </div>
          <div className="flex flex-row pt-8 pb-8 secular-16px-upper blue-text float-left">
            <div className=" w-11/12 h-1 bg-white my-auto mr-6">
              <div className=" w-7/12 h-1 main-accent my-auto mr-6"></div>
            </div>
            <p>{required}/-</p>
          </div>
          <div className="flex flex-row pb-4 justify-between float-left">
            <button
              onClick={() => {
                donate(id);
              }}
              className=" flex flex-row items-center my-auto lato-14-white pt-[07px] pb-[08px] pl-[12px] pr-[12px] main-accent hover:bg-pink-800"
            >
              Donate Now
              <Image
                className="ml-[7px]"
                src={heart}
                width={15}
                height={15}
                alt="heart"
              />
            </button>
            <p className="lato-14px-0lh-main my-auto">Read More &gt;&gt;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
