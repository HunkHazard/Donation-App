import Link from "next/link";
export const Addcases = () => {
  return (
    <div className=" main1 flex h-auto">
      <div className=" addcases mx-auto my-auto md:flex hidden flex-col w-100 h-auto">
        <Link href="/empdashboard">
          <button className=" self-start signin2">back</button>
        </Link>
        <div className=" mx-auto pt-5">
          <img
            src="/GraphicElements.svg"
            alt="Graphic Elements"
            className=" h-25 pb-3"
          />
        </div>
        <p className=" bebas-32 mx-auto">Add a New Case</p>
        <div className="addcasesdiv mx-auto">
          <div className=" flex flex-row pt-10 justify-between">
            <div className=" flex flex-col justify-between">
              <p className=" lato-26-blue">Case Title</p>
              <input placeholder="Enter Case Title" className="input"></input>
            </div>
            <div className=" flex flex-col">
              <p className=" lato-26-blue">School Level</p>
              <input placeholder="Enter School Level" className="input"></input>
            </div>
          </div>
          <div className=" flex flex-row justify-between">
            <div className=" flex flex-col pt-5">
              <p className=" lato-26-blue">Reason for Donation</p>
              <input
                placeholder="Enter Reason for Donation"
                className="input"
              ></input>
            </div>
            <div className=" flex flex-col pt-5">
              <p className=" lato-26-blue">Background Info</p>
              <input
                placeholder="Enter Background Information"
                className="input"
              ></input>
            </div>
          </div>
          <div className=" flex flex-row justify-between">
            <div className=" flex flex-col pt-5">
              <p className=" lato-26-blue">Bank</p>
              <input placeholder="Enter Bank Name" className="input"></input>
            </div>
            <div className=" flex flex-col pt-5">
              <p className=" lato-26-blue">Account Number</p>
              <input
                placeholder="Enter Account Number"
                className="input"
              ></input>
            </div>
          </div>
        </div>
        <div className=" signin2 flex mx-auto hover:bg-pink-800 mb-2">
          <p className=" mx-auto my-auto">Add Case</p>
        </div>
      </div>
      <div className=" addcases mx-auto my-auto sm:max-md:flex hidden flex-col w-100 h-auto">
        <Link href="/empdashboard">
          <button className=" self-start signin2">back</button>
        </Link>
        <div className=" mx-auto pt-5">
          <img
            src="/GraphicElements.svg"
            alt="Graphic Elements"
            className=" h-25 pb-3"
          />
        </div>
        <p className=" bebas-32 mx-auto">Add a New Case</p>
        <div className="addcasesdiv mx-auto">
          <div className=" flex flex-row pt-10 justify-between">
            <div className=" flex flex-col justify-between">
              <p className=" lato-26-blue">Case Title</p>
              <input placeholder="Enter Case Title" className="input"></input>
            </div>
            <div className=" flex flex-col">
              <p className=" lato-26-blue">School Level</p>
              <input placeholder="Enter School Level" className="input"></input>
            </div>
          </div>
          <div className=" flex flex-row justify-between">
            <div className=" flex flex-col pt-5">
              <p className=" lato-26-blue">Reason for Donation</p>
              <input
                placeholder="Enter Reason for Donation"
                className="input"
              ></input>
            </div>
            <div className=" flex flex-col pt-5">
              <p className=" lato-26-blue">Background Info</p>
              <input
                placeholder="Enter Background Information"
                className="input"
              ></input>
            </div>
          </div>
          <div className=" flex flex-row justify-between">
            <div className=" flex flex-col pt-5">
              <p className=" lato-26-blue">Bank</p>
              <input placeholder="Enter Bank Name" className="input"></input>
            </div>
            <div className=" flex flex-col pt-5">
              <p className=" lato-26-blue">Account Number</p>
              <input
                placeholder="Enter Account Number"
                className="input"
              ></input>
            </div>
          </div>
        </div>
        <div className=" signin2 flex mx-auto hover:bg-pink-800">
          <p className=" mx-auto my-auto">Add Case</p>
        </div>
      </div>
      <div className=" addcases mx-auto my-auto max-sm:flex hidden flex-col w-100 h-auto">
        <Link href="/empdashboard">
          <button className=" self-start signin2">back</button>
        </Link>
        <div className=" mx-auto pt-5">
          <img
            src="/GraphicElements.svg"
            alt="Graphic Elements"
            className=" h-25 pb-3"
          />
        </div>
        <p className=" bebas-32 mx-auto">Add a New Case</p>
        <div className="addcasesdiv mx-auto">
          <div className=" flex flex-col justify-between">
            <p className=" lato-26-blue">Case Title</p>
            <input placeholder="Enter Case Title" className="input"></input>
          </div>
          <div className=" flex flex-col">
            <p className=" lato-26-blue">School Level</p>
            <input placeholder="Enter School Level" className="input"></input>
          </div>
          <div className=" flex flex-col pt-5">
            <p className=" lato-26-blue">Reason for Donation</p>
            <input
              placeholder="Enter Reason for Donation"
              className="input"
            ></input>
          </div>
          <div className=" flex flex-col pt-5">
            <p className=" lato-26-blue">Background Info</p>
            <input
              placeholder="Enter Background Information"
              className="input"
            ></input>
          </div>
          <div className=" flex flex-col pt-5">
            <p className=" lato-26-blue">Bank</p>
            <input placeholder="Enter Bank Name" className="input"></input>
          </div>
          <div className=" flex flex-col pt-5">
            <p className=" lato-26-blue">Account Number</p>
            <input placeholder="Enter Account Number" className="input"></input>
          </div>
          <div className=" signin2 flex hover:bg-pink-800 mx-auto mt-3 whitespace-nowrap w-full">
            <p className=" mx-auto my-auto">Addcases</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addcases;