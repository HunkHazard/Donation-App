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
import { useEffect, useState } from "react";

const Home = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/cases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCases(data);
      });
  }, []);

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
        {/* <div className="lg:flex hidden flex-row pt-6 pb-4 justify-end w-4/5 mx-auto">
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
        </div> */}
        <div>
          <div className="flex flex-col h-96 overflow-y-scroll ">
            <Cases />
            <Cases />
            <Cases />
            <Cases />
            <Cases />
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
