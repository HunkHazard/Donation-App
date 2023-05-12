import Link from "next/link"
import Image from "next/image"
import logo from "../public/logo.svg";
import heart from "../public/heart.svg";
import NavDropDown from "../components/profiledropdown.js";
import BurgerDropDown from "../components/burgernavdropdown.js";

const Nav = () => {
    return (
        <div className="flex flex-row w-full p-5 h-14 main-accent items-center justify-between">
            <Link href="/">
                <Image
                    src={logo}
                    width={45}
                    height={45}
                    alt="Logo"
                />
            </Link>
            {/* Desktop Nav */}
            <div className="sm:flex hidden">
                <div className="flex gap-5 md:gap-9 lato-16-white">
                    <Link href="/" className="my-auto hover:text-black/30 active:underline-offset-2">
                        Home
                    </Link>
                    <Link href="/ " className="my-auto hover:text-black/30">
                        About Us
                    </Link>
                    <Link href="/" className="my-auto hover:text-black/30">
                        Insights
                    </Link>
                    <Link href="/" className="my-auto hover:text-black/30">
                        <NavDropDown />
                    </Link>
                    <button className=" flex flex-row items-center my-auto pt-[07px] pb-[08px] pl-[26px] pr-[26px] border border-white rounded-3xl hover:bg-pink-800">
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
            {/* Mobile Nav */}
            <div className="sm:hidden flex relative">
                <Link href="/" className="my-auto">
                    <BurgerDropDown/>
                </Link>
            </div>
        </div>
    )
}
export default Nav