import Sidebar from "./sidebar";

export const userdashboard = () => {
  return (
    <div className="main">
      <div className=" lg:max-2xl:flex hidden">
        <Sidebar></Sidebar>
      </div>
      <div className=" max-sm:max-lg:flex hidden">
        <div className=" h-7 w-7"></div>
      </div>
      <div className="statsdiv  flex flex-col">
        <select
          name="timesort"
          className="timesort cursor-pointer lato-16-blue"
        >
          <option>This Month</option>
          <option>This Week</option>
          <option>This Year</option>
        </select>
        <div className=" flex flex-row mt-4">
          <div className=" flex flex-col">
            <div className="donations mr-3 pr-3 md:max-2xl:flex hidden justify-between">
              <div className="totaldonation pt-2 pb-4 pr-6 pl-1">
                <p className="lato-25-blue ml-6 pb-6 whitespace-nowrap">
                  Total Donation
                </p>
                <p className="bebas-32 pb-6 ml-6 whitespace-nowrap">
                  PKR 50,000
                </p>
                <p className="lato-16-blue ml-6 pb-2">5% than last month</p>
              </div>
              <div className="totaldonation pt-2 pb-4 pr-6 pl-1">
                <p className="lato-25-blue ml-6 pb-6 whitespace-nowrap">
                  Donation Today
                </p>
                <p className="bebas-32 pb-6 ml-6 whitespace-nowrap">
                  PKR 10,000
                </p>
                <p className="lato-16-blue ml-6 pb-2">+2% than last month</p>
              </div>
            </div>
            <div className="donations pr-1 mr-3 sm:max-md:flex hidden">
              <div className="totaldonation pt-2 pb-2 pr-2 flex flex-col ">
                <p className="lato-16-blue ml-4 pb-4 whitespace-nowrap">
                  Total Donation
                </p>
                <p className="bebas-26 pb-4 ml-4 whitespace-nowrap">
                  PKR 50,000
                </p>
                <p className="lato-12-blue ml-4 pb-2">5% than last month</p>
              </div>
              <div className="totaldonation pt-2 pb-2 pr-4 ml-4 flex flex-col">
                <p className="lato-16-blue ml-4 pb-4 whitespace-nowrap">
                  Donation Today
                </p>
                <p className="bebas-26 pb-4 ml-4 whitespace-nowrap">
                  PKR 10,000
                </p>
                <p className="lato-12-blue ml-4 pb-2">+2% than last month</p>
              </div>
            </div>
            <div className="donations pr-1 mr-3 max-sm:flex hidden">
              <div className="totaldonation pt-2 pb-2 pr-2 flex flex-col ">
                <p className="lato-16-blue ml-4 pb-4 whitespace-nowrap">
                  Total Donation
                </p>
                <p className="bebas-26 pb-4 ml-4 whitespace-nowrap">
                  PKR 50,000
                </p>
                <p className="lato-12-blue ml-4 pb-2">5% than last month</p>
              </div>
              <div className="totaldonation pt-2 pb-2 pr-4 ml-4 flex flex-col">
                <p className="lato-16-blue ml-4 pb-4 whitespace-nowrap">
                  Donation Today
                </p>
                <p className="bebas-26 pb-4 ml-4 whitespace-nowrap">
                  PKR 10,000
                </p>
                <p className="lato-12-blue ml-4 pb-2">+2% than last month</p>
              </div>
            </div>
            <div className=" totaldonation mt-2 md:max-2xl:flex hidden flex-col">
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
            <div className=" totaldonation mt-2 sm:max-md:flex hidden flex-col">
              <div className=" flex flex-row justify-center mt-4">
                <p className=" lato-20-blue pb-10">Top Donors</p>
              </div>
              <div className=" flex flex-row justify-between pb-4">
                <img
                  src="/first.svg"
                  alt="Graphic Elements"
                  className=" h-8 ml-2"
                />
                <p className=" lato-12-blue">Quadingle</p>
                <p className=" lato-12-blue mr-2">PKR 420,000 Donated</p>
              </div>
              <div className=" flex flex-row justify-between pb-4">
                <img
                  src="/second.svg"
                  alt="Graphic Elements"
                  className=" h-8 ml-2"
                />
                <p className=" lato-12-blue">Arslan G</p>
                <p className=" lato-12-blue mr-2">PKR 410,000 Donated</p>
              </div>
              <div className=" flex flex-row justify-between pb-4">
                <img
                  src="/third.svg"
                  alt="Graphic Elements"
                  className=" h-8 ml-2"
                />
                <p className=" lato-12-blue">Jawad Sagheer</p>
                <p className=" lato-12-blue mr-2">PKR 400,000 Donated</p>
              </div>
            </div>
            <div className=" totaldonation mt-2 max-sm:flex hidden flex-col">
              <div className=" flex flex-row justify-center mt-4">
                <p className=" lato-20-blue pb-10">Top Donors</p>
              </div>
              <div className=" flex flex-row justify-between pb-4">
                <img
                  src="/first.svg"
                  alt="Graphic Elements"
                  className=" h-8 ml-2"
                />
                <p className=" lato-12-blue">Quadingle</p>
                <p className=" lato-12-blue mr-2">PKR 420,000 Donated</p>
              </div>
              <div className=" flex flex-row justify-between pb-4">
                <img
                  src="/second.svg"
                  alt="Graphic Elements"
                  className=" h-8 ml-2"
                />
                <p className=" lato-12-blue">Arslan G</p>
                <p className=" lato-12-blue mr-2">PKR 410,000 Donated</p>
              </div>
              <div className=" flex flex-row justify-between pb-4">
                <img
                  src="/third.svg"
                  alt="Graphic Elements"
                  className=" h-8 ml-2"
                />
                <p className=" lato-12-blue">Jawad Sagheer</p>
                <p className=" lato-12-blue mr-2">PKR 400,000 Donated</p>
              </div>
            </div>
            <div className="fundraising max-sm:flex flex-col justify-between hidden h-fit w-100 ml-2 mt-4">
              <div className=" flex flex-row">
                <p className="lato-16-blue pr-2 pt-2 pl-1">Your fundraising</p>
                <img
                  src="/arrow-small-right.svg"
                  alt="Graphic Elements"
                  className=" h-4 float-right"
                />
              </div>
              <div className=" flex flex-row justify-between">
                <div className=" flex flex-col justify-between ml-1 pt-3 pb-5">
                  <p className="secular-12px-upper pb-2">CASE # 01 TITLE</p>
                  <div className=" flex flex-row pb-2">
                    <img
                      src="/OBJECTS.svg"
                      alt="Graphic Elements"
                      className=" h-3 mr-1 "
                    />
                    <p className="lato-10-blue">Elementary School</p>
                  </div>
                  <div className="progressbar">
                    <div className="progress"></div>
                  </div>
                  <div className=" flex flex-row justify-between pt-1">
                    <p className="lato-10-blue">PKR 50,000/PKR 90,000</p>
                  </div>
                </div>
                <div className=" flex flex-col justify-between ml-1 pt-3 pb-5">
                  <p className="secular-12px-upper pb-2">CASE # 01 TITLE</p>
                  <div className=" flex flex-row pb-2">
                    <img
                      src="/OBJECTS.svg"
                      alt="Graphic Elements"
                      className=" h-3 mr-1 "
                    />
                    <p className="lato-10-blue">Elementary School</p>
                  </div>
                  <div className="progressbar">
                    <div className="progress"></div>
                  </div>
                  <div className=" flex flex-row justify-between pt-1">
                    <p className="lato-10-blue">PKR 50,000/PKR 90,000</p>
                  </div>
                </div>
              </div>
              <div className=" flex flex-row justify-between">
                <div className=" flex flex-col justify-between ml-1 pt-3 pb-5">
                  <p className="secular-12px-upper pb-2">CASE # 01 TITLE</p>
                  <div className=" flex flex-row pb-2">
                    <img
                      src="/OBJECTS.svg"
                      alt="Graphic Elements"
                      className=" h-3 mr-1 "
                    />
                    <p className="lato-10-blue">Elementary School</p>
                  </div>
                  <div className="progressbar">
                    <div className="progress"></div>
                  </div>
                  <div className=" flex flex-row justify-between pt-1">
                    <p className="lato-10-blue">PKR 50,000/PKR 90,000</p>
                    <p className="lato-10-blue">60%</p>
                  </div>
                </div>{" "}
                <div className=" flex flex-col justify-between ml-1 pt-3 pb-5">
                  <p className="secular-12px-upper pb-2">CASE # 01 TITLE</p>
                  <div className=" flex flex-row pb-2">
                    <img
                      src="/OBJECTS.svg"
                      alt="Graphic Elements"
                      className=" h-3 mr-1 "
                    />
                    <p className="lato-10-blue">Elementary School</p>
                  </div>
                  <div className="progressbar">
                    <div className="progress"></div>
                  </div>
                  <div className=" flex flex-row justify-between pt-1">
                    <p className="lato-10-blue">PKR 50,000/PKR 90,000</p>
                    <p className="lato-10-blue">60%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fundraising md:max-2xl:flex flex-col justify-between hidden h-fit w-fit ml-2">
            <div className=" flex flex-row">
              <p className="lato-20-blue pr-2 pt-2 pl-2">Your fundraising</p>
              <img
                src="/arrow-small-right.svg"
                alt="Graphic Elements"
                className=" h-5 float-right"
              />
            </div>
            <div className=" flex flex-col justify-between ml-2 pt-3 pb-5">
              <p className="secular-14px-upper pb-2">CASE # 01 TITLE</p>
              <div className=" flex flex-row pb-2">
                <img
                  src="/OBJECTS.svg"
                  alt="Graphic Elements"
                  className=" h-4 mr-1 "
                />
                <p className="lato-12-blue">Elementary School</p>
              </div>
              <div className="progressbar">
                <div className="progress"></div>
              </div>
              <div className=" flex flex-row justify-between pt-1">
                <p className="lato-10-blue">PKR 50,000/PKR 90,000</p>
                <p className="lato-10-blue">60%</p>
              </div>
            </div>
            <div className=" flex flex-col justify-between ml-2 pt-3 pb-5">
              <p className="secular-14px-upper pb-2">CASE # 01 TITLE</p>
              <div className=" flex flex-row pb-2">
                <img
                  src="/OBJECTS.svg"
                  alt="Graphic Elements"
                  className=" h-4 mr-1 "
                />
                <p className="lato-12-blue">Elementary School</p>
              </div>
              <div className="progressbar">
                <div className="progress"></div>
              </div>
              <div className=" flex flex-row justify-between pt-1">
                <p className="lato-10-blue">PKR 50,000/PKR 90,000</p>
                <p className="lato-10-blue">60%</p>
              </div>
            </div>{" "}
            <div className=" flex flex-col justify-between ml-2 pt-3 pb-5">
              <p className="secular-14px-upper pb-2">CASE # 01 TITLE</p>
              <div className=" flex flex-row pb-2">
                <img
                  src="/OBJECTS.svg"
                  alt="Graphic Elements"
                  className=" h-4 mr-1 "
                />
                <p className="lato-12-blue">Elementary School</p>
              </div>
              <div className="progressbar">
                <div className="progress"></div>
              </div>
              <div className=" flex flex-row justify-between pt-1">
                <p className="lato-10-blue">PKR 50,000/PKR 90,000</p>
                <p className="lato-10-blue">60%</p>
              </div>
            </div>{" "}
            <div className=" flex flex-col justify-between ml-2 pt-3 pb-5">
              <p className="secular-14px-upper pb-2">CASE # 01 TITLE</p>
              <div className=" flex flex-row pb-2">
                <img
                  src="/OBJECTS.svg"
                  alt="Graphic Elements"
                  className=" h-4 mr-1 "
                />
                <p className="lato-12-blue">Elementary School</p>
              </div>
              <div className="progressbar">
                <div className="progress"></div>
              </div>
              <div className=" flex flex-row justify-between pt-1">
                <p className="lato-10-blue">PKR 50,000/PKR 90,000</p>
                <p className="lato-10-blue">60%</p>
              </div>
            </div>
          </div>
          <div className="fundraising sm:max-md:flex flex-col justify-between hidden h-fit w-fit ml-2">
            <div className=" flex flex-row">
              <p className="lato-16-blue pr-2 pt-2 pl-1">Your fundraising</p>
              <img
                src="/arrow-small-right.svg"
                alt="Graphic Elements"
                className=" h-4 float-right"
              />
            </div>
            <div className=" flex flex-col justify-between ml-1 pt-3 pb-5">
              <p className="secular-12px-upper pb-2">CASE # 01 TITLE</p>
              <div className=" flex flex-row pb-2">
                <img
                  src="/OBJECTS.svg"
                  alt="Graphic Elements"
                  className=" h-3 mr-1 "
                />
                <p className="lato-10-blue">Elementary School</p>
              </div>
              <div className="progressbar">
                <div className="progress"></div>
              </div>
              <div className=" flex flex-row justify-between pt-1">
                <p className="lato-10-blue">PKR 50,000/PKR 90,000</p>
                <p className="lato-10-blue">60%</p>
              </div>
            </div>
            <div className=" flex flex-col justify-between ml-1 pt-3 pb-5">
              <p className="secular-12px-upper pb-2">CASE # 01 TITLE</p>
              <div className=" flex flex-row pb-2">
                <img
                  src="/OBJECTS.svg"
                  alt="Graphic Elements"
                  className=" h-3 mr-1 "
                />
                <p className="lato-10-blue">Elementary School</p>
              </div>
              <div className="progressbar">
                <div className="progress"></div>
              </div>
              <div className=" flex flex-row justify-between pt-1">
                <p className="lato-10-blue">PKR 50,000/PKR 90,000</p>
                <p className="lato-10-blue">60%</p>
              </div>
            </div>{" "}
            <div className=" flex flex-col justify-between ml-1 pt-3 pb-5">
              <p className="secular-12px-upper pb-2">CASE # 01 TITLE</p>
              <div className=" flex flex-row pb-2">
                <img
                  src="/OBJECTS.svg"
                  alt="Graphic Elements"
                  className=" h-3 mr-1 "
                />
                <p className="lato-10-blue">Elementary School</p>
              </div>
              <div className="progressbar">
                <div className="progress"></div>
              </div>
              <div className=" flex flex-row justify-between pt-1">
                <p className="lato-10-blue">PKR 50,000/PKR 90,000</p>
                <p className="lato-10-blue">60%</p>
              </div>
            </div>{" "}
            <div className=" flex flex-col justify-between ml-1 pt-3 pb-5">
              <p className="secular-12px-upper pb-2">CASE # 01 TITLE</p>
              <div className=" flex flex-row pb-2">
                <img
                  src="/OBJECTS.svg"
                  alt="Graphic Elements"
                  className=" h-3 mr-1 "
                />
                <p className="lato-10-blue">Elementary School</p>
              </div>
              <div className="progressbar">
                <div className="progress"></div>
              </div>
              <div className=" flex flex-row justify-between pt-1">
                <p className="lato-10-blue">PKR 50,000/PKR 90,000</p>
                <p className="lato-10-blue">60%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default userdashboard;