import Image from "next/image";
import Logo from "../public/logo.svg";
import email from "../public/email.svg";
import Link from "next/link";
const footer = () => {
    return (
        <div>
            <div className="lg:flex hidden flex-col w-full h-72 blue-bg items-center">
                <div className="flex flex-row w-11/12 mx-auto my-auto justify-between">
                    <div className="flex flex-row items-start justify-start">
                        <div>
                            <Image className="w-20 h-auto"
                                src={Logo}
                                width={15}
                                height={15}
                                alt="heart"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row w-6/12 justify-between">
                        <div className="flex flex-col">
                            <div className=" lato-16-white font-bold">Navigate</div>
                            <Link href="/"  className=" lato-14-white pt-4 ">Home</Link>
                            <Link href="/insights" className=" lato-14-white pt-4">Insights</Link>
                            <Link href="/userdashboard" className=" lato-14-white pt-4">My Profile</Link>
                        </div>
                        <div className="flex flex-col">
                            <div className=" lato-16-white font-bold">About Us</div>
                            <Link href="/about-us" className=" lato-14-white pt-4">Our Mission</Link>
                        </div>
                        <div className="flex flex-col ">
                            <div className=" lato-16-white font-bold">Contact Us</div>
                            <div className=" flex flex-row items-center lato-16-white pt-4">
                                <Image className="mr-[7px] w-auto h-auto"
                                    src={email}
                                    width={15}
                                    height={15}
                                    alt="heart"
                                />
                                imahadsajjad@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 w-full h-[0.5px]"></div>
                <div className="pb-2 pt-2">&#169; Donations 2023</div>
            </div>
            <div className="md:max-lg:flex hidden flex-col w-full h-80 blue-bg items-center">
                <div className="flex flex-row w-11/12 mx-auto my-auto justify-between">
                    <div className="flex flex-row items-start justify-start">
                        <div className=" flex flex-row items-center lato-16-white">
                            <Image className="w-20 h-auto"
                                src={Logo}
                                width={15}
                                height={15}
                                alt="heart"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row w-6/12 justify-between">
                        <div className="flex flex-col">
                            <div className=" lato-16-white font-bold">Navigate</div>
                            <Link href="/" className=" lato-14-white pt-4 ">Home</Link>
                            <Link href="/insights" className=" lato-14-white pt-4">Insights</Link>
                            <Link href="/userdashboard" className=" lato-14-white pt-4">My Profile</Link>
                        </div>
                        <div className="flex flex-col">
                            <div className=" lato-16-white font-bold">About Us</div>
                            <Link href="/about-us" className=" lato-14-white pt-4">Our Mission</Link>
                        </div>
                        <div className="flex flex-col ">
                            <div className=" lato-16-white font-bold">Contact Us</div>
                            <div className=" flex flex-row items-center lato-16-white pt-4">
                                <Image className="mr-[7px] w-auto h-auto"
                                    src={email}
                                    width={15}
                                    height={15}
                                    alt="heart"
                                />
                                imahadsajjad@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 w-full h-[1px]"></div>
                <div className="pb-2">&#169; Donations 2023</div>
            </div>
            <div className="sm:max-md:flex hidden flex-col w-full h-80 blue-bg items-center">
                <div className="flex flex-row w-11/12 mx-auto my-auto justify-between">
                    <div className="flex flex-row items-start justify-start">
                        <div className=" flex flex-row items-center lato-16-white">
                            <Image className="mr-[7px] w-20 h-auto"
                                src={Logo}
                                width={15}
                                height={15}
                                alt="heart"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row w-full justify-evenly">
                        <div className="flex flex-col">
                            <div className=" lato-16-white font-bold">Navigate</div>
                            <Link href="/" className=" lato-14-white pt-4 ">Home</Link>
                            <Link href="/insights" className=" lato-14-white pt-4">Insights</Link>
                            <Link href="/userdashboard" className=" lato-14-white pt-4">My Profile</Link>
                        </div>
                        <div className="flex flex-col">
                            <div className=" lato-16-white font-bold">About Us</div>
                            <Link href="/about-us" className=" lato-14-white pt-4">Our Mission</Link>
                        </div>
                        <div className="flex flex-col ">
                            <div className=" lato-16-white font-bold">Contact Us</div>
                            <div className=" flex flex-row items-center lato-16-white pt-4">
                                <Image className="mr-[7px] w-auto h-auto"
                                    src={email}
                                    width={15}
                                    height={15}
                                    alt="heart"
                                />
                                donations@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="bg-gray-200 w-full h-[0.5px]"></div>
                <div className="pb-2">&#169; Donations 2023</div>
            </div>
            <div className="max-sm:flex hidden flex-col mx-auto w-full h-72 blue-bg items-center">
                <div className="flex flex-col w-11/12 mx-auto my-auto justify-between">
                    <div className=" flex flex-row items-center mx-auto pb-4 lato-14-white">
                        <Image className="mr-[7px] w-[40px] h-auto"
                            src={Logo}
                            width={15}
                            height={15}
                            alt="heart"
                        />
                    </div>
                    <div className="bg-white opacity-30 w-full h-[0.5px]"></div>
                    <div className="flex flex-row mx-auto w-full justify-between">
                        <div className="flex flex-col  pt-2 pb-2">
                            <div className=" lato-14-white font-bold ">Navigate</div>
                            <Link href="/" className=" lato-14-white pt-2 ">Home</Link>
                            <Link href="/insights" className=" lato-14-white pt-2 ">Insights</Link>
                            <Link href="/userdashboard" className=" lato-14-white pt-2 ">My Profile</Link>
                        </div>
                        <div className="flex flex-col pt-2 pb-2">
                            <div className=" lato-14-white font-bold">About Us</div>
                            <Link href="/about-us" className=" lato-14-white pt-2">Our Mission</Link>
                        </div>
                        <div className="flex flex-col pt-2 pb-2">
                            <div className=" lato-14-white font-bold">Contact Us</div>
                            <div className=" lato-14-white pt-2 ">imahadsajjad@gmail.com</div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 w-full h-[0.5px]"></div>
                <div className="pt-2">&#169; Donations 2023</div>
            </div>

        </div>
    )
}

export default footer