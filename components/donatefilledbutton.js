import heart from "../public/heart.svg";
import Image from "next/image";
const DonateFilledButton = () => {
    return (
        <button className=" flex flex-row items-center my-auto pt-[07px] pb-[08px] pl-[26px] pr-[26px] main-accent rounded-3xl">
            Donate Now
            <Image className="ml-[7px]"
                src={heart}
                width={15}
                height={15}
                alt="heart"
            />
        </button>
    )
}
export default DonateFilledButton