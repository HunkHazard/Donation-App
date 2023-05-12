import Image from "next/image"
import cover from "../public/maincover.svg"
import heart from "../public/heart.svg";

const MainCover = () => {
    return (
        <div className=" w-auto h-max">
            <Image className="w-screen sm:h-96 md:h-96 h-80 object-cover absolute"
                src={cover}
                width={1366}
                height={460}
                alt="cover"
            />
            <div className="lg:flex hidden absolute">
                <div className="ml-[145px]">
                    <div className="secular-60px-70lh lg:mt-[70px] lg:mr-[400px]">
                        YOUR <a className="main-text">DONATION</a>
                        <br></br>
                        A CHILD'S <a className="main-text">FUTURE</a>
                        <p className="lato-16px-0lh mb-4 mt-1">We do it for children in need</p>
                        <button className=" flex flex-row lato-16px-0lh items-center my-auto pt-[07px] pb-[08px] pl-[26px] pr-[26px] main-accent rounded-3xl mt-[0px] mr-[0px] hover:bg-pink-800">
                            Donate Now
                            <Image className="ml-[7px]"
                                src={heart}
                                width={15}
                                height={15}
                                alt="heart"
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div className="md:max-lg:flex hidden absolute">
                <div className="ml-[125px]">
                    <div className="secular-50px-55lh md:mt-[85px] md:mr-[240px]">
                        YOUR <a className="main-text">DONATION</a>
                        <br></br>
                        A CHILD'S <a className="main-text">FUTURE</a>
                        <p className="lato-16px-0lh mb-4 mt-1">We do it for children in need</p>
                        <button className=" flex flex-row lato-16px-0lh items-center my-auto pt-[07px] pb-[08px] pl-[26px] pr-[26px] main-accent rounded-3xl mt-[0px] mr-[0px] hover:bg-pink-800">
                            Donate Now
                            <Image className="ml-[7px]"
                                src={heart}
                                width={15}
                                height={15}
                                alt="heart"
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div className="sm:max-md:flex hidden absolute">
                <div className="ml-[125px]">
                    <div className="secular-40px-45lh sm:mt-[95px] sm:mr-[195px]">
                        YOUR <a className="main-text">DONATION</a>
                        <br></br>
                        A CHILD'S <a className="main-text">FUTURE</a>
                        <p className="lato-16px-0lh mb-4 mt-1">We do it for children in need</p>
                        <button className=" flex flex-row lato-16px-0lh items-center my-auto pt-[07px] pb-[08px] pl-[26px] pr-[26px] main-accent rounded-3xl mt-[0px] mr-[0px] hover:bg-pink-800">
                            Donate Now
                            <Image className="ml-[7px]"
                                src={heart}
                                width={15}
                                height={15}
                                alt="heart"
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div className="max-sm:flex hidden absolute">
                <div className="ml-[75px]">
                    <div className="secular-40px-45lh mt-[30px] mr-[90px]">
                        YOUR <a className="main-text">DONATION</a>
                        <br></br>
                        A CHILD'S <a className="main-text">FUTURE</a>
                        <p className="lato-16px-0lh mb-4 mt-1">We do it for children in need</p>
                        <button className=" flex flex-row lato-16px-0lh items-center my-auto pt-[07px] pb-[08px] pl-[26px] pr-[26px] main-accent rounded-3xl mt-[0px] mr-[0px] hover:bg-pink-800">
                            Donate Now
                            <Image className="ml-[7px]"
                                src={heart}
                                width={15}
                                height={15}
                                alt="heart"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCover