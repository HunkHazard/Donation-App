"use client";
import Image from "next/image";
import heart from "../public/heart.svg";
import OrangeCase from "../public/OrangeSchool.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Cases = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div>
            <div className="lg:flex hidden w-auto h-auto mx-auto" data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration="500">
                <div className="flex flex-row mx-auto w-4/5 bg-gray-100 items-center ">
                    <div className="h-[160px] w-[160px] aspect-square border border-main rounded-full float-left overflow-hidden">
                    </div>
                    <div className="flex flex-col pl-4 pr-4 w-4/5 justify-between">
                        <div className="pt-4 secular-16px-upper w-auto blue-text float-left">
                            GIVING THESE HALF ASSED CHILDREN DONATIONS SO THEY CAN STUDY AND FAIL
                        </div>
                        <div className="flex flex-row pt-4 pb-4 secular-16px-upper blue-text float-left">
                            <div className=" w-11/12 h-2 bg-white my-auto mr-6">
                                <div className=" w-7/12 h-2 main-accent my-auto mr-6"></div>
                            </div>
                            <p>50,000/-</p>
                        </div>
                        <div className="flex flex-row pb-4 justify-between float-left">
                            <button className=" flex flex-row items-center my-auto pt-[07px] pb-[08px] pl-[26px] pr-[26px] main-accent hover:bg-pink-800">
                                Donate Now
                                <Image className="ml-[7px]"
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
            <div className="md:max-lg:flex hidden w-auto h-auto mx-auto" data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration="500">
                <div className="flex flex-row mx-auto w-4/5 bg-gray-100 items-center ">
                    <div className="h-[150px] w-[150px] aspect-square border border-main rounded-full float-left">
                    </div>
                    <div className="flex flex-col pl-4 pr-4 w-auto justify-between">
                        <div className="pt-4 secular-16px-upper w-auto blue-text float-left">
                            GIVING THESE HALF ASSED CHILDREN DONATIONS SO THEY CAN STUDY AND FAIL
                        </div>
                        <div className="flex flex-row pt-4 pb-4 secular-16px-upper blue-text float-left">
                            <div className=" w-11/12 h-2 bg-white my-auto mr-6">
                                <div className=" w-7/12 h-2 main-accent my-auto mr-6"></div>
                            </div>
                            <p>50,000/-</p>
                        </div>
                        <div className="flex flex-row pb-4 justify-between float-left">
                            <button className=" flex flex-row items-center my-auto lato-14-white pt-[07px] pb-[08px] pl-[16px] pr-[16px] main-accent hover:bg-pink-800">
                                Donate Now
                                <Image className="ml-[7px]"
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
            <div className="sm:max-md:flex hidden w-auto h-auto mx-auto" data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration="500">
                <div className="flex flex-col pt-4 pl-4 pr-4 w-4/5 mx-auto h-auto bg-gray-100 items-cente">
                    <div className="flex flex-row justify-between items-center">
                        <Image className="object-cover"
                            src={OrangeCase}
                            width={60}
                            height={60}
                            alt="heart"
                        />
                        <div className="secular-14px-upper w-auto blue-text float-left pl-4">
                            GIVING THESE HALF ASSED CHILDREN DONATIONS SO THEY CAN STUDY AND FAIL
                        </div>
                    </div>
                    <div className="flex flex-row pt-8 pb-8 secular-16px-upper blue-text float-left">
                        <div className=" w-11/12 h-1 bg-white my-auto mr-6">
                            <div className=" w-7/12 h-1 main-accent my-auto mr-6"></div>
                        </div>
                        <p>50,000/-</p>
                    </div>
                    <div className="flex flex-row pb-4 justify-between float-left">
                        <button className=" flex flex-row items-center my-auto lato-14-white pt-[07px] pb-[08px] pl-[12px] pr-[12px] main-accent hover:bg-pink-800">
                            Donate Now
                            <Image className="ml-[7px]"
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
            <div className="max-sm:flex hidden w-auto h-auto mx-auto" data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration="500">
                <div className="flex flex-col pt-4 pl-4 pr-4 w-4/5 mx-auto h-auto bg-gray-100 items-cente">
                    <div className="flex flex-row justify-between items-center">
                        <Image className="object-cover"
                            src={OrangeCase}
                            width={60}
                            height={60}
                            alt="heart"
                        />
                        <div className="secular-14px-upper w-auto blue-text float-left pl-4">
                            GIVING THESE HALF ASSED CHILDREN DONATIONS SO THEY CAN STUDY AND FAIL
                        </div>
                    </div>
                    <div className="flex flex-row pt-8 pb-8 secular-16px-upper blue-text float-left">
                        <div className=" w-11/12 h-1 bg-white my-auto mr-6">
                            <div className=" w-7/12 h-1 main-accent my-auto mr-6"></div>
                        </div>
                        <p>50,000/-</p>
                    </div>
                    <div className="flex flex-row pb-4 justify-between float-left">
                        <button className=" flex flex-row items-center my-auto lato-14-white pt-[07px] pb-[08px] pl-[12px] pr-[12px] main-accent hover:bg-pink-800">
                            Donate Now
                            <Image className="ml-[7px]"
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
    )
}

export default Cases