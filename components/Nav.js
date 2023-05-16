import Link from "next/link"
import Image from "next/image"
import logo from "../public/logo.svg";
import heart from "../public/heart.svg";
import NavDropDown from "../components/profiledropdown.js";
import BurgerDropDown from "../components/burgernavdropdown.js";
import { useRouter } from "next/router"

const Nav = () => {
    const router = useRouter();

    const isActiveLink = (href) => {
        return router.pathname === href ? "active-link underline underline-offset-4" : "";
    }

    return (
        <div>
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
                        <Link href="/" className={`my-auto hover:text-black/30 ${isActiveLink("/")}`}>
                            Home
                        </Link>
                        <Link href="/about-us " className={`my-auto hover:text-black/30 ${isActiveLink("/about-us")}`} >
                            About Us
                        </Link>
                        <Link href="/insights" className={`my-auto hover:text-black/30 ${isActiveLink("/insights")}`}>
                            Insights
                        </Link>
                        <NavDropDown />
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
                {/* Mobile Nav */}
                <div className="sm:hidden flex relative">
                    <Link href="#" className="my-auto">
                        <BurgerDropDown />
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Nav