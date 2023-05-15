import Image from "next/image";
import betterfuturebg from "../public/betterfuture.svg";
import betterfutureverticalbg from "../public/betterfuturevertical.svg";
import createaccount from "../public/createaccount.svg";
import startdonating from "../public/startdonating.svg";
import selectcase from "../public/selectcase.svg";
import heart from "../public/heart.svg";

const betterfuture = () => {
    return (
        <div>
            <div className="2xl:flex hidden pb-4 flex-row w-auto items-center justify-center">
                <Image className="w-4/5 h-96 object-cover"
                    src={betterfuturebg}
                    width={287}
                    height={349}
                    alt="cover"
                />
                <div className="absolute flex flex-col w-3/5 h-2/6 justify-between">
                    <div className="flex flex-row secular-30px-white mx-auto">A BETTER FUTURE - IN YOUR HANDS</div>
                    <div className="flex flex-row w-full justify-between ">
                        <div className="flex flex-col items-center">
                            <div>
                                <Image className="w-auto h-auto object-cover"
                                    src={createaccount}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className=" lato-16-white-bold pt-2 ">
                                Create Account
                            </div>
                            <div className=" w-36 lato-14-white-centered">
                                Sign up and create an account on our website
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div>
                                <Image className="w-auto h-auto object-cover"
                                    src={selectcase}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className=" lato-16-white-bold pt-2 ">
                                Select a Case
                            </div>
                            <div className=" w-36 lato-14-white-centered">
                                You can select a case of your choice to donate
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div>
                                <Image className="w-auto h-auto object-cover"
                                    src={startdonating}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className=" lato-16-white-bold pt-2 ">
                                Start Donating
                            </div>
                            <div className=" w-36 lato-14-white-centered">
                                After selecting a case donate to it
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row w-full justify-center">
                        <a href="#donate-nowxl" className=" flex flex-row items-center my-auto pt-[07px] pb-[08px] pl-[26px] pr-[26px] border border-white rounded-3xl hover:bg-pink-800">
                            Donate Now
                            <Image className="ml-[7px]"
                                src={heart}
                                width={15}
                                height={15}
                                alt="heart"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="lg:max-2xl:flex hidden pb-4 flex-row w-auto items-center justify-center">
                <Image className="w-4/5 h-96 object-cover"
                    src={betterfuturebg}
                    width={287}
                    height={349}
                    alt="cover"
                />
                <div className="absolute flex flex-col w-3/5 h-3/6 justify-between">
                    <div className="flex flex-row secular-30px-white mx-auto">A BETTER FUTURE - IN YOUR HANDS</div>
                    <div className="flex flex-row w-full justify-between ">
                        <div className="flex flex-col items-center">
                            <div>
                                <Image className="w-auto h-auto object-cover"
                                    src={createaccount}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className=" lato-16-white-bold pt-2 ">
                                Create Account
                            </div>
                            <div className=" w-36 lato-14-white-centered">
                                Sign up and create an account on our website
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div>
                                <Image className="w-auto h-auto object-cover"
                                    src={selectcase}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className=" lato-16-white-bold pt-2 ">
                                Select a Case
                            </div>
                            <div className=" w-36 lato-14-white-centered">
                                You can select a case of your choice to donate
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div>
                                <Image className="w-auto h-auto object-cover"
                                    src={startdonating}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className=" lato-16-white-bold pt-2 ">
                                Start Donating
                            </div>
                            <div className=" w-36 lato-14-white-centered">
                                After selecting a case donate to it
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row w-full justify-center">
                        <a href="#donate-nowlg" className=" flex flex-row items-center my-auto pt-[07px] pb-[08px] pl-[26px] pr-[26px] border border-white rounded-3xl hover:bg-pink-800">
                            Donate Now
                            <Image className="ml-[7px]"
                                src={heart}
                                width={15}
                                height={15}
                                alt="heart"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="md:max-lg:flex hidden pb-4 flex-row w-auto items-center justify-center">
                <Image className="w-4/5 h-96 object-cover"
                    src={betterfuturebg}
                    width={287}
                    height={349}
                    alt="cover"
                />
                <div className="absolute flex flex-col w-3/5 h-80 justify-between">
                    <div className="flex flex-row secular-25px text-center mx-auto">A BETTER FUTURE - IN YOUR HANDS</div>
                    <div className="flex flex-row w-full justify-between ">
                        <div className="flex flex-col items-center">
                            <div>
                                <Image className="w-auto h-auto object-cover"
                                    src={createaccount}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className=" lato-16-white-bold pt-2 ">
                                Create Account
                            </div>
                            <div className=" w-36 lato-14-white-centered">
                                Sign up and create an account on our website
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div>
                                <Image className="w-auto h-auto object-cover"
                                    src={selectcase}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className=" lato-16-white-bold pt-2 ">
                                Select a Case
                            </div>
                            <div className=" w-36 lato-14-white-centered">
                                You can select a case of your choice to donate
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div>
                                <Image className="w-auto h-auto object-cover"
                                    src={startdonating}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className=" lato-16-white-bold pt-2 ">
                                Start Donating
                            </div>
                            <div className=" w-36 lato-14-white-centered">
                                After selecting a case donate to it
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row w-full justify-center">
                        <a href="#donate-nowmd" className=" flex flex-row items-center my-auto pt-[07px] pb-[08px] pl-[26px] pr-[26px] border border-white rounded-3xl hover:bg-pink-800">
                            Donate Now
                            <Image className="ml-[7px]"
                                src={heart}
                                width={15}
                                height={15}
                                alt="heart"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="sm:max-md:flex hidden pb-4 flex-row w-auto items-center justify-center">
                <Image className="w-4/5 h-auto object-cover"
                    src={betterfutureverticalbg}
                    width={287}
                    height={349}
                    alt="cover"
                />
                <div className="absolute flex flex-col h-4/6 justify-between">
                    <div className="flex flex-row pb-4 secular-25px text-center mx-auto">A BETTER FUTURE - IN YOUR HANDS</div>
                    <div className="flex flex-col w-full h-80 justify-between ">
                        <div className="flex flex-col items-center">
                            <div>
                                <Image className="w-auto h-auto object-cover"
                                    src={createaccount}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className=" lato-16-white-bold pt-2 ">
                                Create Account
                            </div>
                            <div className="lato-14-white-centered">
                                Sign up and create an account on our website
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div>
                                <Image className="w-auto h-auto object-cover"
                                    src={selectcase}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className=" lato-16-white-bold pt-2 ">
                                Select a Case
                            </div>
                            <div className="lato-14-white-centered">
                                You can select a case of your choice to donate
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div>
                                <Image className="w-auto h-auto object-cover"
                                    src={startdonating}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className=" lato-16-white-bold pt-2 ">
                                Start Donating
                            </div>
                            <div className="lato-14-white-centered">
                                After selecting a case donate to it
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row w-full pt-8 justify-center">
                        <a href="#donate-nowsm" className=" flex flex-row items-center my-auto lato-14-white pt-[08px] pb-[08px] pl-[16px] pr-[16px] border border-white rounded-3xl hover:bg-pink-800">
                            Donate Now
                            <Image className="ml-[7px]"
                                src={heart}
                                width={15}
                                height={15}
                                alt="heart"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-sm:flex hidden pb-4 flex-row w-auto items-center justify-center">
                <Image className="w-4/5 h-96 object-cover"
                    src={betterfutureverticalbg}
                    width={287}
                    height={349}
                    alt="cover"
                />
                <div className="absolute flex flex-col h-auto justify-between">
                    <div className="flex flex-row secular-16px-upper text-center mx-auto pb-4">A BETTER FUTURE - IN YOUR HANDS</div>
                    <div className="flex flex-col w-full h-64 justify-between ">
                        <div className="flex flex-col items-center">
                            <div>
                                <Image className="w-[20px] h-[20px] object-cover"
                                    src={createaccount}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className=" lato-14-white-bold pt-2 ">
                                Create Account
                            </div>
                            <div className="lato-12-white-centered">
                                Sign up and create an account on our website
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div>
                                <Image className="w-[20px] h-[20px] object-cover"
                                    src={selectcase}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className=" lato-14-white-bold pt-2 ">
                                Select a Case
                            </div>
                            <div className="lato-12-white-centered">
                                You can select a case of your choice to donate
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div>
                                <Image className="w-[20px] h-[20px] object-cover"
                                    src={startdonating}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className=" lato-14-white-bold pt-2 ">
                                Start Donating
                            </div>
                            <div className="lato-12-white-centered">
                                After selecting a case donate to it
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row w-full justify-center pt-4">
                        <a href="#donate-now" className=" flex flex-row items-center my-auto lato-14-white pt-[08px] pb-[08px] pl-[16px] pr-[16px] border border-white rounded-3xl hover:bg-pink-800">
                            Donate Now
                            <Image className="ml-[7px]"
                                src={heart}
                                width={15}
                                height={15}
                                alt="heart"
                            />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default betterfuture