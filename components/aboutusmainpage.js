"use client";
import Learnmorebutton from "./learnmorebutton";
import Image from "next/image";
import AboutUs from "../public/AboutUsHomePage.svg";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const aboutusmainpage = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div>
            <div className="w-full bg-floral-white-bg sm:h-96 md:h-96 h-80 "
                data-aos-duration="500">
            </div>
            <div className="lg:flex hidden w-4/5 flex-row items-center mx-auto pt-16 pb-16 h-auto" >
                <div className="flex flex-row items-center mx-auto">
                    <div data-aos="fade-right" data-aos-easing="linear"
                        data-aos-duration="500"><p className="secular-25px-37lh-2ls" >WE STAND TO HELP</p></div>
                    <div className=" h-auto w-[667px]" data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="500">
                        <p className="lato-16-blue ml-[34px] mr-[34px] ">
                            Welcome to Dayamay, your trusted platform dedicated to revolutionizing education through the power of donations. Our mission is to provide a seamless and secure way for passionate individuals like you to support educational causes and make a lasting impact on the lives of students. We carefully curate a wide range of educational projects, ensuring transparency, authenticity, and accountability every step of the way. By connecting donors with compelling cases, we empower you to contribute to scholarships, school improvements, teacher training, and more. Join us on this journey of transforming lives through education and be a catalyst for change today.
                        </p>
                        <div className="ml-[34px] mt-[8px]">
                            <Link href="/about-us"><Learnmorebutton /></Link>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-easing="linear"
                        data-aos-duration="500">
                        <Image className="w-auto h-auto object-contain"
                            src={AboutUs}
                            width={287}
                            height={349}
                            alt="cover"
                        />
                    </div>
                </div>
            </div>
            <div className="md:max-lg:flex hidden w-4/5  flex-row items-center mx-auto pt-16 pb-16 h-auto">
                <p className="secular-25px-37lh-2ls" data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="500">WE STAND TO HELP</p>
                <div className=" h-auto w-[667px]" data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="500">
                    <p className="lato-14-blue ml-[10px] mr-[20px] ">
                        Welcome to Dayamay, your trusted platform dedicated to revolutionizing education through the power of donations. Our mission is to provide a seamless and secure way for passionate individuals like you to support educational causes and make a lasting impact on the lives of students. We carefully curate a wide range of educational projects, ensuring transparency, authenticity, and accountability every step of the way. By connecting donors with compelling cases, we empower you to contribute to scholarships, school improvements, teacher training, and more. Join us on this journey of transforming lives through education and be a catalyst for change today.
                    </p>
                    <div className="ml-[10px] mt-[8px]">
                        <Link href="/about-us"><Learnmorebutton /></Link>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-easing="linear"
                    data-aos-duration="500">
                    <Image className="w-[317px] h-auto object-contain"
                        src={AboutUs}
                        width={287}
                        height={349}
                        alt="cover"
                    />
                </div>
            </div>
            <div className="sm:max-md:flex hidden w-4/5  flex-col items-center mx-auto pt-16 pb-16 h-auto">
                <p className="secular-25px-37lh-2ls-straight" data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="500" >WE STAND TO HELP</p>
                <div className=" h-auto w-auto">
                    <p className="lato-14-blue mt-8 " data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="500">
                        Welcome to Dayamay, your trusted platform dedicated to revolutionizing education through the power of donations. Our mission is to provide a seamless and secure way for passionate individuals like you to support educational causes and make a lasting impact on the lives of students. We carefully curate a wide range of educational projects, ensuring transparency, authenticity, and accountability every step of the way. By connecting donors with compelling cases, we empower you to contribute to scholarships, school improvements, teacher training, and more. Join us on this journey of transforming lives through education and be a catalyst for change today.
                    </p>
                    <div className="mt-[34px] mb-[34px]" data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="500">
                        <Link href="/about-us">
                            <button className="flex flex-row items-center my-auto mx-auto pt-[05px] pb-[05px] pl-[16px] pr-[16px] border main-accent-border rounded-full lato-14-main hover:bg-gray-100 ">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="500">
                    <Image className="w-auto h-auto object-contain"
                        src={AboutUs}
                        width={287}
                        height={349}
                        alt="cover"
                    />
                </div>
            </div>
            <div className="max-sm:flex hidden w-4/5  flex-col items-center mx-auto pt-16 pb-16 h-auto">
                <p className="secular-25px-37lh-2ls-straight" data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="500" >WE STAND TO HELP</p>
                <div className=" h-auto w-auto">
                    <p className="lato-14-blue mt-8 " data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="500">
                        Welcome to Dayamay, your trusted platform dedicated to revolutionizing education through the power of donations. Our mission is to provide a seamless and secure way for passionate individuals like you to support educational causes and make a lasting impact on the lives of students. We carefully curate a wide range of educational projects, ensuring transparency, authenticity, and accountability every step of the way. By connecting donors with compelling cases, we empower you to contribute to scholarships, school improvements, teacher training, and more. Join us on this journey of transforming lives through education and be a catalyst for change today.
                    </p>
                    <div className="mt-[34px] mb-[34px]" data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="500">
                        <Link href="/about-us">
                            <button className="flex flex-row items-center my-aut0 mx-auto pt-[05px] pb-[05px] pl-[16px] pr-[16px] border main-accent-border rounded-full lato-14-main hover:bg-gray-100 ">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="500">
                    <Image className="w-auto h-auto object-contain"
                        src={AboutUs}
                        width={287}
                        height={349}
                        alt="cover"
                    />
                </div>
            </div>
        </div>
    )
}
export default aboutusmainpage