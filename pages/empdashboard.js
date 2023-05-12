import Sidebar from "./sidebar";

export const empdashboard = () => {
  return (
    <div className="main">
      <div className=" lg:max-2xl:flex hidden">
        <Sidebar></Sidebar>
      </div>
      <div className="statsdiv flex flex-col">
        <select name="timesort" className="timesort">
          <option>This Month</option>
          <option>This Week</option>
          <option>This Year</option>
        </select>
        <div className=" sm:max-2xl:flex hidden flex-row pt-4">
          <div className=" flex flex-col mr-8">
            <div className=" md:max-2xl:flex hidden flex-row mb-4">
              <div className="totaldonation pt-2 pb-2 pr-6 pl-4">
                <p className="lato-25-blue ml-6 pb-6 whitespace-nowrap">
                  Total Donation
                </p>
                <p className="bebas-32 pb-6 ml-6 whitespace-nowrap">
                  PKR 50,000
                </p>
                <p className="lato-16-blue ml-6 pb-2">5% than last month</p>
              </div>
              <div className="totaldonation pt-2 pb-2 pr-6 pl-4">
                <p className="lato-25-blue ml-6 pb-6 whitespace-nowrap">
                  Donation Today
                </p>
                <p className="bebas-32 pb-6 ml-6 whitespace-nowrap">
                  PKR 10,000
                </p>
                <p className="lato-16-blue ml-6 pb-2">+2% than last month</p>
              </div>
            </div>
            <div className=" sm:max-md:flex hidden flex-row mb-4">
              <div className="totaldonation pt-2 pb-2 pr-6 pl-4">
                <p className="lato-16-blue ml-6 pb-6 whitespace-nowrap">
                  Total Donation
                </p>
                <p className="bebas-26 pb-6 ml-6 whitespace-nowrap">
                  PKR 50,000
                </p>
                <p className="lato-12-blue ml-6 pb-2">5% than last month</p>
              </div>
              <div className="totaldonation pt-2 pb-2 pr-6 pl-4">
                <p className="lato-16-blue ml-6 pb-6 whitespace-nowrap">
                  Donation Today
                </p>
                <p className="bebas-26 pb-6 ml-6 whitespace-nowrap">
                  PKR 10,000
                </p>
                <p className="lato-12-blue ml-6 pb-2">+2% than last month</p>
              </div>
            </div>
            <div className=" max-sm:flex hidden flex-row mb-4">
              <div className="totaldonation pt-2 pb-2 pr-6 pl-4">
                <p className="lato-16-blue ml-6 pb-6 whitespace-nowrap">
                  Total Donation
                </p>
                <p className="bebas-26 pb-6 ml-6 whitespace-nowrap">
                  PKR 50,000
                </p>
                <p className="lato-12-blue ml-6 pb-2">5% than last month</p>
              </div>
              <div className="totaldonation pt-2 pb-2 pr-6 pl-4">
                <p className="lato-16-blue ml-6 pb-6 whitespace-nowrap">
                  Donation Today
                </p>
                <p className="bebas-26 pb-6 ml-6 whitespace-nowrap">
                  PKR 10,000
                </p>
                <p className="lato-12-blue ml-6 pb-2">+2% than last month</p>
              </div>
            </div>
            <div className=" totaldonation md:max-2xl:flex hidden flex-col w-100">
              <div className=" flex flex-row justify-center mt-4">
                <p className=" lato-25-blue pb-10">Top Donors</p>
              </div>
              <div className=" flex flex-row justify-between pb-4">
                <div className=" flex flex-row">
                  <img
                    src="/first.svg"
                    alt="Graphic Elements"
                    className=" h-10 ml-2 my-auto"
                  />
                  <p className=" lato-16-blue pl-2 my-auto">Quadingle</p>
                </div>
                <p className=" lato-16-blue mr-2 my-auto">
                  PKR 420,000 Donated
                </p>
              </div>
              <div className=" flex flex-row justify-between pb-4">
                <div className=" flex flex-row">
                  <img
                    src="/second.svg"
                    alt="Graphic Elements"
                    className=" h-10 ml-2 my-auto"
                  />
                  <p className=" lato-16-blue pl-2 my-auto">Arslan G</p>
                </div>
                <p className=" lato-16-blue mr-2 my-auto">
                  PKR 410,000 Donated
                </p>
              </div>
              <div className=" flex flex-row justify-between pb-4">
                <div className=" flex flex-row">
                  <img
                    src="/third.svg"
                    alt="Graphic Elements"
                    className=" h-10 ml-2 my-auto"
                  />
                  <p className=" lato-16-blue pl-2 my-auto">Jawad Sagheer</p>
                </div>

                <p className=" lato-16-blue mr-2 my-auto">
                  PKR 400,000 Donated
                </p>
              </div>
            </div>
            <div className=" totaldonation sm:max-md:flex hidden flex-col w-100">
              <div className=" flex flex-row justify-center mt-4">
                <p className=" lato-20-blue pb-10">Top Donors</p>
              </div>
              <div className=" flex flex-row justify-between pb-4">
                <div className=" flex flex-row">
                  <img
                    src="/first.svg"
                    alt="Graphic Elements"
                    className=" h-8 ml-2 my-auto"
                  />
                  <p className=" lato-12-blue pl-2 my-auto">Quadingle</p>
                </div>
                <p className=" lato-12-blue mr-2 my-auto">
                  PKR 420,000 Donated
                </p>
              </div>
              <div className=" flex flex-row justify-between pb-4">
                <div className=" flex flex-row">
                  <img
                    src="/second.svg"
                    alt="Graphic Elements"
                    className=" h-8 ml-2 my-auto"
                  />
                  <p className=" lato-12-blue pl-2 my-auto">Arslan G</p>
                </div>
                <p className=" lato-12-blue mr-2 my-auto">
                  PKR 410,000 Donated
                </p>
              </div>
              <div className=" flex flex-row justify-between pb-4">
                <div className=" flex flex-row">
                  <img
                    src="/third.svg"
                    alt="Graphic Elements"
                    className=" h-8 ml-2 my-auto"
                  />
                  <p className=" lato-12-blue pl-2 my-auto">Jawad Sagheer</p>
                </div>

                <p className=" lato-12-blue mr-2 my-auto">
                  PKR 400,000 Donated
                </p>
              </div>
            </div>
          </div>
          <div className=" md:max-2xl:flex hidden flex-col">
            <div className="totaldonation pt-2 pb-2 pr-6 pl-4 mb-4">
              <p className="lato-25-blue ml-6 pb-6 whitespace-nowrap">
                Total Donors
              </p>
              <p className="bebas-32-blue pb-6 ml-6 whitespace-nowrap">5200</p>
              <p className="lato-16-blue ml-6 pb-2 whitespace-nowrap">
                +2% than last month
              </p>
            </div>
            <div className="fundraising1 h-fit w-fit ml-2">
              <img
                src="/arrow-small-right.svg"
                alt="Graphic Elements"
                className="arrow"
              />
              <div className=" flex flex-col justify-between pl-3 pb-3">
                <h2 className="lato-20-blue pt-5">Your fundraising</h2>
                <div className=" flex flex-col justify-between">
                  <p className="secular-12px-upper pt-3 pb-2">CASE #01 TITLE</p>
                  <div className=" inline-flex flex-row">
                    <img
                      src="/OBJECTS.svg"
                      alt="Graphic Elements"
                      className="h-5"
                    />
                    <p className="lato-10-blue pb-2 pl-2">Elementary School</p>
                  </div>
                  <div className="progressbar">
                    <div className="progress"></div>
                  </div>
                  <div className=" flex flex-row justify-between pt-3 lato-10-blue1">
                    <p>PKR 50,000/PKR 90,000</p>
                    <p>60%</p>
                  </div>
                </div>
                <div className=" flex flex-col justify-between">
                  <p className="secular-12px-upper pt-3 pb-2">CASE #01 TITLE</p>
                  <div className=" inline-flex flex-row">
                    <img
                      src="/OBJECTS.svg"
                      alt="Graphic Elements"
                      className="h-5"
                    />
                    <p className="lato-10-blue pb-2 pl-2">Elementary School</p>
                  </div>
                  <div className="progressbar">
                    <div className="progress"></div>
                  </div>
                  <div className=" flex flex-row justify-between pt-3 lato-10-blue1">
                    <p>PKR 50,000/PKR 90,000</p>
                    <p>60%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" sm:max-md:flex hidden flex-col">
            <div className="totaldonation pt-2 pb-2 pr-6 pl-4 mb-4">
              <p className="lato-16-blue ml-6 pb-6 whitespace-nowrap">
                Total Donors
              </p>
              <p className="bebas-26-blue pb-6 ml-6 whitespace-nowrap">5200</p>
              <p className="lato-12-blue ml-6 pb-2 whitespace-nowrap">
                +2% than last month
              </p>
            </div>
            <div className="fundraising1 h-fit w-fit ml-2">
              <img
                src="/arrow-small-right.svg"
                alt="Graphic Elements"
                className="arrow h-6"
              />
              <div className=" flex flex-col justify-between pl-3 pb-3">
                <h2 className="lato-14-blue pt-5">Your fundraising</h2>
                <div className=" flex flex-col justify-between">
                  <p className="secular-10px-upper pt-3 pb-2">CASE #01 TITLE</p>
                  <div className=" inline-flex flex-row">
                    <img
                      src="/OBJECTS.svg"
                      alt="Graphic Elements"
                      className="h-5"
                    />
                    <p className="lato-10-blue pb-2 pl-2">Elementary School</p>
                  </div>
                  <div className="progressbar">
                    <div className="progress"></div>
                  </div>
                  <div className=" flex flex-row justify-between pt-3 lato-10-blue1">
                    <p>PKR 50,000/PKR 90,000</p>
                  </div>
                </div>
                <div className=" flex flex-col justify-between">
                  <p className="secular-10px-upper pt-3 pb-2">CASE #01 TITLE</p>
                  <div className=" inline-flex flex-row">
                    <img
                      src="/OBJECTS.svg"
                      alt="Graphic Elements"
                      className="h-5"
                    />
                    <p className="lato-10-blue pb-2 pl-2">Elementary School</p>
                  </div>
                  <div className="progressbar">
                    <div className="progress"></div>
                  </div>
                  <div className=" flex flex-row justify-between pt-3 lato-10-blue1">
                    <p>PKR 50,000/PKR 90,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" max-sm:flex hidden flex-col mt-4">
          <div className=" flex flex-row">
            <div className=" flex flex-row mb-4">
              <div className="totaldonation pt-2 pb-2 pr-6 pl-4">
                <p className="lato-16-blue ml-6 pb-6 whitespace-nowrap">
                  Total Donation
                </p>
                <p className="bebas-26 pb-6 ml-6 whitespace-nowrap">
                  PKR 50,000
                </p>
                <p className="lato-12-blue ml-6 pb-2">5% than last month</p>
              </div>
              <div className="totaldonation pt-2 pb-2 pr-6 pl-4">
                <p className="lato-16-blue ml-6 pb-6 whitespace-nowrap">
                  Donation Today
                </p>
                <p className="bebas-26 pb-6 ml-6 whitespace-nowrap">
                  PKR 10,000
                </p>
                <p className="lato-12-blue ml-6 pb-2">+2% than last month</p>
              </div>
            </div>
          </div>
          <div className=" totaldonation flex flex-col w-100 mb-4">
            <div className=" flex flex-row justify-center mt-4">
              <p className=" lato-20-blue pb-10">Top Donors</p>
            </div>
            <div className=" flex flex-row justify-between pb-4">
              <div className=" flex flex-row">
                <img
                  src="/first.svg"
                  alt="Graphic Elements"
                  className=" h-8 ml-2 my-auto"
                />
                <p className=" lato-12-blue pl-2 my-auto">Quadingle</p>
              </div>
              <p className=" lato-12-blue mr-2 my-auto">PKR 420,000 Donated</p>
            </div>
            <div className=" flex flex-row justify-between pb-4">
              <div className=" flex flex-row">
                <img
                  src="/second.svg"
                  alt="Graphic Elements"
                  className=" h-8 ml-2 my-auto"
                />
                <p className=" lato-12-blue pl-2 my-auto">Arslan G</p>
              </div>
              <p className=" lato-12-blue mr-2 my-auto">PKR 410,000 Donated</p>
            </div>
            <div className=" flex flex-row justify-between pb-4">
              <div className=" flex flex-row">
                <img
                  src="/third.svg"
                  alt="Graphic Elements"
                  className=" h-8 ml-2 my-auto"
                />
                <p className=" lato-12-blue pl-2 my-auto">Jawad Sagheer</p>
              </div>

              <p className=" lato-12-blue mr-2 my-auto">PKR 400,000 Donated</p>
            </div>
          </div>
          <div className=" flex flex-row">
            <div className="totaldonation pt-2 pr-6 pl-4 mb-4">
              <p className="lato-16-blue ml-6 mb-6 whitespace-nowrap">
                Total Donors
              </p>
              <p className="bebas-26-blue mb-6 ml-6 whitespace-nowrap">5200</p>
              <p className="lato-12-blue ml-6 whitespace-nowrap">
                +2% than last month
              </p>
            </div>
            <div className="fundraising1 h-fit w-fit ml-2">
              <img
                src="/arrow-small-right.svg"
                alt="Graphic Elements"
                className="arrow h-6"
              />
              <div className=" flex flex-col justify-between pl-3 pb-3">
                <h2 className="lato-14-blue pt-5">Your fundraising</h2>
                <div className=" flex flex-col justify-between">
                  <p className="secular-10px-upper pt-3 pb-2">CASE #01 TITLE</p>
                  <div className=" inline-flex flex-row">
                    <img
                      src="/OBJECTS.svg"
                      alt="Graphic Elements"
                      className="h-5"
                    />
                    <p className="lato-10-blue pb-2 pl-2">Elementary School</p>
                  </div>
                  <div className="progressbar">
                    <div className="progress"></div>
                  </div>
                  <div className=" flex flex-row justify-between pt-3 lato-10-blue1">
                    <p>PKR 50,000/PKR 90,000</p>
                  </div>
                </div>
                <div className=" flex flex-col justify-between">
                  <p className="secular-10px-upper pt-3 pb-2">CASE #01 TITLE</p>
                  <div className=" inline-flex flex-row">
                    <img
                      src="/OBJECTS.svg"
                      alt="Graphic Elements"
                      className="h-5"
                    />
                    <p className="lato-10-blue pb-2 pl-2">Elementary School</p>
                  </div>
                  <div className="progressbar">
                    <div className="progress"></div>
                  </div>
                  <div className=" flex flex-row justify-between pt-3 lato-10-blue1">
                    <p>PKR 50,000/PKR 90,000</p>
                  </div>
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