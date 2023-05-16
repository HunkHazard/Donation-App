
// unconfirmed

import Link from "next/link";
import Sidebar from "./empsidebar";
import logo from "../public/logo.svg";
import Image from "next/image";
import BurgerDropDown from "@/components/empsidebardropdown";

export const Addcases = () => {
  {
    const pname = document.getElementById("pname").value;
    const iname = document.getElementById("iname").value;
    const desc = document.getElementById("desc").value;
    const amount = document.getElementById("amount").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const province = document.getElementById("province").value;
    const payload = {
      pname: pname,
      iname: iname,
      desc: desc,
      amount: amount,
      address: address,
      city: city,
      province: province,
    };

    console.log(payload);

    async function fetchRes(payload) {
      const res = await fetch("http://localhost:3000/api/addcase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("admintoken"),
        },
        body: JSON.stringify(payload),
      });

      const parsedRes = await res.json();
      if (res.status == 200) {
        alert("Case Added Successfully!!");
        window.location.href = "/empdashboard";
      } else {
        const { message } = parsedRes;
        alert(message);
      }
      // window.location.href = "/login";
    }


  }

  return (
    <div className=" main flex h-auto max-md:h-screen">
      <div className=" md:flex hidden">
        <Sidebar></Sidebar>
      </div>
      <div className=" md:flex hidden w-3/5 mx-auto my-auto flex-col max-md:mt-0 h-auto">
        <div className="mx-auto pt-5">
          <img
            src="/GraphicElements.svg"
            alt="Graphic Elements"
            className=" h-25 pb-3"
          />
        </div>
        <p className=" bebas-32 mx-auto">Add a New Case</p>
        <div className=" w-full mx-auto p-6">
          <div className=" flex flex-row w-full justify-between">
            <div className=" flex flex-col w-full mr-1">
              <p className=" lato-26-blue blue-text">Case Title</p>
              <input id="pname" placeholder="Enter Case Title" className="input"></input>
            </div>
            <div className=" flex flex-col w-full ml-1">
              <p className=" lato-26-blue blue-text">Institution Name</p>
              <input id="iname" placeholder="Enter Insitution Name" className="input"></input>
            </div>
          </div>
          <div className=" flex flex-row w-full justify-between">
            <div className=" flex flex-col w-full pt-5 mr-1">
              <p className=" lato-26-blue blue-text">Address</p>
              <input id="address"
                placeholder="Enter Address"
                className="input"
              ></input>
            </div>
            <div className=" flex flex-col w-full pt-5 ml-1">
              <p className=" lato-26-blue blue-text">Background Info</p>
              <input id="desc"
                placeholder="Enter Background Information"
                className="input"
              ></input>
            </div>
          </div>
          <div className=" flex flex-row w-full justify-between">
            <div className=" flex flex-col pt-5 w-full mr-1">
              <p className=" lato-26-blue blue-text">City</p>
              <input id="city"
              placeholder="Enter City" className="input"></input>
            </div>
            <div className=" flex flex-col pt-5 w-full ml-1">
              <p className=" lato-26-blue blue-text">Amount</p>
              <input id="amount"
                placeholder="Enter Amount"
                className="input"
              ></input>
            </div>
          </div>
        </div>
        <div >
          <button className="flex flex-row items-center my-auto mx-auto pt-[05px] pb-[05px] pl-[16px] pr-[16px] border main-accent-border rounded-full lato-16-main main-text hover:bg-pink-800 hover:text-white ">
            Add Case
          </button>
        </div>
      </div>
      <div className=" sm:max-md:w-full mx-auto my-auto sm:max-md:flex hidden max-md:mt-0 flex-col">
        <div className="lg:hidden flex">
          <div className="flex flex-row w-screen p-5 mb-4 h-14 blue-bg items-center justify-between">
            <Image
              src={logo}
              width={45}
              height={45}
              alt="Logo"
            />
            <BurgerDropDown />
          </div>
        </div>
        <div className=" mx-auto">
          <img
            src="/GraphicElements.svg"
            alt="Graphic Elements"
            className=" h-25 pb-3"
          />
        </div>
        <p className=" bebas-32 mx-auto">Add a New Case</p>
        <div className="addcasesdiv mx-auto w-3/5 ">
          <div className=" flex flex-col mt-4 justify-between">
            <div className=" flex flex-col justify-between">
              <p className=" lato-26-blue blue-text">Case Title</p>
              <input id="pname"
              placeholder="Enter Case Title" className="input"></input>
            </div>
            <div className=" flex flex-col">
              <p className=" lato-26-blue blue-text pt-5">Institution Name</p>
              <input id="iname"
              placeholder="Enter Instituion Name" className="input"></input>
            </div>
          </div>
          <div className=" flex flex-col justify-between">
            <div className=" flex flex-col pt-5">
              <p className=" lato-26-blue blue-text">Address</p>
              <input id="address"
                placeholder="Enter Address"
                className="input"
              ></input>
            </div>
            <div className=" flex flex-col pt-5">
              <p className=" lato-26-blue blue-text">Background Info</p>
              <input id="desc"
                placeholder="Enter Background Information"
                className="input"
              ></input>
            </div>
          </div>
          <div className=" flex flex-col justify-between">
            <div className=" flex flex-col pt-5">
              <p className=" lato-26-blue blue-text">City</p>
              <input  id="city"
              placeholder="Enter City" className="input"></input>
            </div>
            <div className=" flex flex-col pt-5">
              <p className=" lato-26-blue blue-text">Amount</p>
              <input id="amount"
                placeholder="Enter Amount"
                className="input"
              ></input>
            </div>
          </div>
        </div>
        <div >
          <button className="flex flex-row mt-6 mb-6 items-center my-auto mx-auto pt-[05px] pb-[05px] pl-[16px] pr-[16px] border main-accent-border rounded-full lato-16-main main-text hover:bg-pink-800 hover:text-white ">
            Add Case
          </button>
        </div>
      </div>
      <div className=" max-sm:flex w-full mx-auto my-auto hidden max-md:mt-0 flex-col">
        <div className="lg:hidden flex">
          <div className="flex flex-row w-screen p-5 mb-4 h-14 blue-bg items-center justify-between">
            <Image
              src={logo}
              width={45}
              height={45}
              alt="Logo"
            />
            <BurgerDropDown />
          </div>
        </div>
        <div className=" mx-auto">
          <img
            src="/GraphicElements.svg"
            alt="Graphic Elements"
            className=" h-25 pb-3"
          />
        </div>
        <p className=" bebas-32 mx-auto">Add a New Case</p>
        <div className="addcasesdiv mx-auto w-3/5 ">
          <div className=" flex flex-col mt-4 justify-between">
            <div className=" flex flex-col justify-between">
              <p className=" lato-26-blue blue-text">Case Title</p>
              <input  id="pname"
              placeholder="Enter Case Title" className="input"></input>
            </div>
            <div className=" flex flex-col">
              <p className=" lato-26-blue blue-text pt-5">Institution Name</p>
              <input id="iname"
              placeholder="Enter Institution Name" className="input"></input>
            </div>
          </div>
          <div className=" flex flex-col justify-between">
            <div className=" flex flex-col pt-5">
              <p className=" lato-26-blue blue-text">Address</p>
              <input id="address"
                placeholder="Enter Address"
                className="input"
              ></input>
            </div>
            <div className=" flex flex-col pt-5">
              <p className=" lato-26-blue blue-text">Background Info</p>
              <input id="desc"
                placeholder="Enter Background Information"
                className="input"
              ></input>
            </div>
          </div>
          <div className=" flex flex-col justify-between">
            <div className=" flex flex-col pt-5">
              <p className=" lato-26-blue blue-text">City</p>
              <input  id="city"
              placeholder="Enter City" className="input"></input>
            </div>
            <div className=" flex flex-col pt-5">
              <p className=" lato-26-blue blue-text">Amount</p>
              <input id="amount"
                placeholder="Enter Account Number"
                className="input"
              ></input>
            </div>
          </div>
        </div>
        <div >
          <button className="flex flex-row mt-6 mb-6 items-center my-auto mx-auto pt-[05px] pb-[05px] pl-[16px] pr-[16px] border main-accent-border rounded-full lato-16-main main-text hover:bg-pink-800 hover:text-white ">
            Add Case
          </button>
        </div>
      </div>

    </div>
  );
};

export default Addcases;