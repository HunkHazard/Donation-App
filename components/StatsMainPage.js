"use client";
import Image from "next/image";
import StatsBg from "../public/statsbg.png"
import ActiveDonors from "../public/activedonors.svg"
import CasesRegistered from "../public/casesregistered.svg"
import TotalEmployees from "../public/totalemployees.svg"
import StudentsHelped from "../public/studentshelped.svg"
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const StatsMainPage = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div>
            <div className=" lg:flex hidden flex-row pb-16 h-auto w-auto items-center justify-center">
                <Image className="w-full h-auto object-cover" data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="500"
                    src={StatsBg}
                    width={287}
                    height={349}
                    alt="cover"
                />
                <div className=" w-11/12 flex flex-col mx-auto my-auto absolute justify-center">
                    <div className="secular-25px pb-4 pt-8" data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="500">
                        <r className="blue-text">WHEN PEOPLE </r><r className="main-text">HELP PEOPLE</r> <br></br>
                        <r className="blue-text">CHANGE HAPPENS</r>
                    </div>
                    <div className="flex flex-row justify-between pb-8 pt-8" data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="500">
                        <div className="flex flex-row">
                            <Image className="w-auto h-auto pr-[8px] pl-[8px] object-contain"
                                src={ActiveDonors}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                            <div className="flex flex-col">
                                <p className="bebas-90px main-text">50+</p>
                                <p className="secular-16px-upper blue-text">Active Donors</p>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <Image className="w-auto h-auto pr-[8px] pl-[8px] object-contain"
                                src={CasesRegistered}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                            <div className="flex flex-col">
                                <p className="bebas-90px main-text">50+</p>
                                <p className="secular-16px-upper blue-text">Cases Registered</p>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <Image className="w-auto h-auto pr-[8px] pl-[8px] object-contain"
                                src={TotalEmployees}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                            <div className="flex flex-col">
                                <p className="bebas-90px main-text">50+</p>
                                <p className="secular-16px-upper blue-text">Total Employees</p>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <Image className="w-auto h-auto pr-[8px] pl-[8px] object-contain"
                                src={StudentsHelped}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                            <div className="flex flex-col">
                                <p className="bebas-90px main-text">50+</p>
                                <p className="secular-16px-upper blue-text">Students Helped</p>
                            </div>
                        </div>
                    </div>
                    <div className="pb-8 pt-4" data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="500">
                        <Link href="/insights">
                            <button className="flex flex-row items-center my-auto pt-[08px] pb-[08px] pl-[18px] pr-[18px] main-accent rounded-br-[20px] hover:bg-pink-800">
                                Explore More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className=" md:max-lg:flex hidden flex-row pt-16 pb-16 h-auto w-auto items-center justify-center">
                <Image className="w-full h-auto object-cover" data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="500"
                    src={StatsBg}
                    width={287}
                    height={349}
                    alt="cover"
                />
                <div className=" w-11/12 flex flex-col mx-auto my-auto absolute justify-center">
                    <div className="secular-16px-upper-bold pt-8" data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="500">
                        <r className="blue-text">WHEN PEOPLE </r><r className="main-text">HELP PEOPLE</r> <br></br>
                        <r className="blue-text">CHANGE HAPPENS</r>
                    </div>
                    <div className="flex flex-row justify-between pb-4 pt-4" data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="500">
                        <div className="flex flex-row">
                            <div className="my-auto pr-[8px] pl-[8px]">
                                <Image className="w-[70px] h-[60px]  object-contain"
                                    src={ActiveDonors}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <p className="bebas-60px main-text">50+</p>
                                <p className="secular-14px-upper blue-text">Active Donors</p>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="my-auto pr-[8px] pl-[8px]">
                                <Image className="w-[70px] h-[60px]  object-contain"
                                    src={CasesRegistered}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <p className="bebas-60px main-text">50+</p>
                                <p className="secular-14px-upper blue-text">Cases Registered</p>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="my-auto pr-[8px] pl-[8px]">
                                <Image className="w-[70px] h-[60px]  object-contain"
                                    src={TotalEmployees}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <p className="bebas-60px main-text">50+</p>
                                <p className="secular-14px-upper blue-text">Total Employees</p>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="my-auto pr-[8px] pl-[8px]">
                                <Image className="w-[70px] h-[60px]  object-contain"
                                    src={StudentsHelped}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <p className="bebas-60px main-text">50+</p>
                                <p className="secular-14px-upper blue-text">Students Helped</p>
                            </div>
                        </div>
                    </div>
                    <div className="pb-8" data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="500">
                        <Link href="/insights">
                            <button className="flex flex-row items-center my-auto lato-14-white pt-[08px] pb-[08px] pl-[18px] pr-[18px] main-accent rounded-br-[20px] hover:bg-pink-800">
                                Explore More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className=" sm:max-md:flex hidden flex-row pt-16 pb-16 w-auto items-center justify-center">
                <Image className="w-full h-96 object-cover" data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="500"
                    src={StatsBg}
                    width={287}
                    height={349}
                    alt="cover"
                />
                <div className=" w-4/5 flex flex-col mx-auto my-auto absolute justify-center">
                    <div className="secular-16px-upper-bold pt-8 pb-4 text-center" data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="500">
                        <r className="blue-text">WHEN PEOPLE </r><r className="main-text">HELP PEOPLE </r>
                        <r className="blue-text">CHANGE HAPPENS</r>
                    </div>
                    <div className="flex flex-row justify-between pb-4 pt-4" data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="500">
                        <div className="flex flex-row">
                            <div className="my-auto pr-[8px] pl-[8px]">
                                <Image className="w-[70px] h-[60px]  object-contain"
                                    src={ActiveDonors}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <p className="bebas-60px main-text">50+</p>
                                <p className="secular-14px-upper blue-text">Active Donors</p>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="my-auto pr-[8px] pl-[8px]">
                                <Image className="w-[70px] h-[60px]  object-contain"
                                    src={CasesRegistered}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <p className="bebas-60px main-text">50+</p>
                                <p className="secular-14px-upper blue-text">Cases Registered</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between pb-4 pt-4" data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="500">
                        <div className="flex flex-row">
                            <div className="my-auto pr-[8px] pl-[8px]">
                                <Image className="w-[70px] h-[60px]  object-contain"
                                    src={TotalEmployees}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <p className="bebas-60px main-text">50+</p>
                                <p className="secular-14px-upper blue-text">Total Employees</p>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="my-auto pr-[8px] pl-[8px]">
                                <Image className="w-[70px] h-[60px]  object-contain"
                                    src={StudentsHelped}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <p className="bebas-60px main-text">50+</p>
                                <p className="secular-14px-upper blue-text">Students Helped</p>
                            </div>
                        </div>
                    </div>
                    <div className="pb-8 pt-4" data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="500">
                        <Link href="/insights">
                            <button className="flex flex-row items-center my-auto lato-14-white pt-[08px] pb-[08px] pl-[18px] pr-[18px] main-accent rounded-br-[20px] hover:bg-pink-800">
                                Explore More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className=" max-sm:flex hidden flex-row pt-16 pb-16 w-auto items-center justify-center">
                <Image className="w-full h-96 object-cover" data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="500"
                    src={StatsBg}
                    width={287}
                    height={349}
                    alt="cover"
                />
                <div className=" w-11/12 flex flex-col mx-auto my-auto absolute justify-center">
                    <div className="secular-16px-upper-bold-centered pt-6 my-auto" data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="500">
                        <r className="blue-text">WHEN PEOPLE </r><r className="main-text">HELP PEOPLE </r>
                        <r className="blue-text">CHANGE HAPPENS</r>
                    </div>
                    <div className="flex flex-row justify-between pb-4 pt-4" data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="500">
                        <div className="flex flex-row">
                            <div className="my-auto pr-[8px] pl-[8px]">
                                <Image className="w-[70px] h-[60px]  object-contain"
                                    src={ActiveDonors}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <p className="bebas-60px main-text">50+</p>
                                <p className="secular-14px-upper blue-text">Active Donors</p>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="my-auto pr-[8px] pl-[8px]">
                                <Image className="w-[70px] h-[60px]  object-contain"
                                    src={CasesRegistered}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <p className="bebas-60px main-text">50+</p>
                                <p className="secular-14px-upper blue-text">Cases Registered</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between pb-4 pt-4" data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="500">
                        <div className="flex flex-row">
                            <div className="my-auto pr-[8px] pl-[8px]">
                                <Image className="w-[70px] h-[60px]  object-contain"
                                    src={TotalEmployees}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <p className="bebas-60px main-text">50+</p>
                                <p className="secular-14px-upper blue-text">Total Employees</p>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="my-auto pr-[8px] pl-[8px]">
                                <Image className="w-[70px] h-[60px] object-contain"
                                    src={StudentsHelped}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <p className="bebas-60px main-text">50+</p>
                                <p className="secular-14px-upper blue-text">Students Helped</p>
                            </div>
                        </div>
                    </div>
                    <div className="pb-8" data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="500">
                        <Link href="/insights">
                            <button className="flex flex-row items-center my-auto lato-14-white pt-[08px] pb-[08px] pl-[18px] pr-[18px] main-accent rounded-br-[20px] hover:bg-pink-800">
                                Explore More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatsMainPage