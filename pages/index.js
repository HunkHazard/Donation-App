import MainCover from "../components/maincover";
import AboutUsMainPage from "../components/aboutusmainpage";
import StatsMainPage from "../components/StatsMainPage";
import Cases from "../components/case";
import forward from "../public/forward.svg";
import orange from "../public/OrangeSchool.svg";
import green from "../public/GreenSchool.svg";
import Testimonial from "../components/testimonial";
import blue from "../public/BlueSchool.svg";
import Image from "next/image";
import BetterFuture from "../components/betterfuture";
import Footer from "../components/footer";
import Nav from "../components/Nav";
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Nav />
      <MainCover />
      <AboutUsMainPage />
      <StatsMainPage />
      <div>
        <div id="donate-nowxl" className="2xl:flex hidden">
          <div className=" secular-25px w-4/5 mx-auto">
            <r className="blue-text">SHARE </r>
            <r className="main-text">KINDNESS</r> <br></br>
            <r className="blue-text">THROUGH </r>
            <r className="main-text">DONATIONS</r>
          </div>
        </div>
        <div id="donate-nowlg" className="lg:max-2xl:flex hidden">
          <div className=" secular-25px w-4/5 mx-auto">
            <r className="blue-text">SHARE </r>
            <r className="main-text">KINDNESS</r> <br></br>
            <r className="blue-text">THROUGH </r>
            <r className="main-text">DONATIONS</r>
          </div>
        </div>
        <div id="donate-nowmd" className="md:max-lg:flex hidden">
          <div className="secular-25px w-4/5 mx-auto">
            <r className="blue-text">SHARE </r>
            <r className="main-text">KINDNESS</r> <br></br>
            <r className="blue-text">THROUGH </r>
            <r className="main-text">DONATIONS</r>
          </div>
        </div>
        <div
          id="donate-nowsm"
          className="sm:max-md:flex hidden flex-row w-4/5 mx-auto"
        >
          <div className="secular-25px mx-auto">
            <r className="blue-text">SHARE </r>
            <r className="main-text">KINDNESS </r>
            <r className="blue-text">THROUGH </r>
            <r className="main-text">DONATIONS</r>
          </div>
        </div>
        <div
          id="donate-now"
          className="max-sm:flex hidden flex-row w-4/5 mx-auto"
        >
          <div className="secular-20px-upper mx-auto">
            <r className="blue-text">SHARE </r>
            <r className="main-text">KINDNESS </r>
            <r className="blue-text">THROUGH </r>
            <r className="main-text">DONATIONS</r>
          </div>
        </div>
        <div className="lg:flex hidden flex-row pt-6 pb-4 justify-end w-4/5 mx-auto">
          <Image
            className="w-auto h-auto object-contain rotate-180 mr-2 opacity-50"
            src={forward}
            width={287}
            height={349}
            alt="cover"
          />
          <Image
            className="w-auto h-auto object-contain"
            src={forward}
            width={287}
            height={349}
            alt="cover"
          />
        </div>
        <div className="md:max-lg:flex hidden flex-row pt-6 pb-4 justify-end w-4/5 mx-auto">
          <Image
            className="w-auto h-auto object-contain rotate-180 mr-2 opacity-50"
            src={forward}
            width={287}
            height={349}
            alt="cover"
          />
          <Image
            className="w-auto h-auto object-contain"
            src={forward}
            width={287}
            height={349}
            alt="cover"
          />
        </div>
        <div className="sm:max-md:flex hidden flex-row pt-16 pb-4 justify-end w-4/5 mx-auto">
          <Image
            className="w-auto h-auto object-contain rotate-180 mr-2 opacity-50"
            src={forward}
            width={287}
            height={349}
            alt="cover"
          />
          <Image
            className="w-auto h-auto object-contain"
            src={forward}
            width={287}
            height={349}
            alt="cover"
          />
        </div>
        <div className="max-sm:flex hidden flex-row pt-12 pb-4 justify-end w-4/5 mx-auto">
          <Image
            className="w-auto h-auto object-contain rotate-180 mr-2 opacity-50"
            src={forward}
            width={287}
            height={349}
            alt="cover"
          />
          <Image
            className="w-auto h-auto object-contain"
            src={forward}
            width={287}
            height={349}
            alt="cover"
          />
        </div>
        <div>
          <div className="pb-6">
            <Cases />
          </div>
          <div className="pb-6">
            <Cases />
          </div>
          <div className="pb-6">
            <Cases />
          </div>

          <div className="sm:flex hidden flex-row justify-center pb-4">
            <div className="flex flex-col justify-center items-center pr-4">
              <Image
                className="w-[80px] h-[80px] object-contain"
                src={orange}
                width={287}
                height={349}
                alt="cover"
              />
              <p className=" lato-16-blue-bold ">Elementary School</p>
            </div>
            <div className="flex flex-col justify-center items-center pl-4 pr-4">
              <Image
                className="w-[80px] h-[80px] object-contain"
                src={green}
                width={287}
                height={349}
                alt="cover"
              />
              <p className=" lato-16-blue-bold ">Middle School</p>
            </div>
            <div className="flex flex-col justify-center items-center pl-4">
              <Image
                className="w-[80px] h-[80px] object-contain"
                src={blue}
                width={287}
                height={349}
                alt="cover"
              />
              <p className=" lato-16-blue-bold ">High School</p>
            </div>
          </div>
          <div className="sm:hidden flex flex-row justify-center pb-4">
            <div className="flex flex-col justify-center items-center pr-2">
              <Image
                className="w-[60px] h-[60px] object-contain"
                src={orange}
                width={287}
                height={349}
                alt="cover"
              />
              <p className=" lato-14-blue-bold ">Elementary School</p>
            </div>
            <div className="flex flex-col justify-center items-center pl-2 pr-2">
              <Image
                className="w-[60px] h-[60px] object-contain"
                src={green}
                width={287}
                height={349}
                alt="cover"
              />
              <p className=" lato-14-blue-bold ">Middle School</p>
            </div>
            <div className="flex flex-col justify-center items-center pl-2">
              <Image
                className="w-[60px] h-[60px] object-contain"
                src={blue}
                width={287}
                height={349}
                alt="cover"
              />
              <p className=" lato-14-blue-bold ">High School</p>
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
      <BetterFuture />
      <Footer />
    </div>
  );
};

export default Home;
