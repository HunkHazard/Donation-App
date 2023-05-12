import Image from "next/image";
import testimonialbg from "../public/testimonialbg.png";
import quotes from "../public/quotes.svg";
const testimonial = () => {
    return (
        <div>
            <div className="lg:flex hidden flex-row pb-16 pt-16 w-auto items-center justify-center">
                <Image className="w-full h-80 object-cover"
                    src={testimonialbg}
                    width={287}
                    height={349}
                    alt="cover"
                />
                <div className="flex flex-col absolute justify-between">
                    <div className="secular-25px w-4/5 mx-auto">
                        <r className="main-text">TESTIMONIALS</r> <br></br>
                        <r className="blue-text">FROM </r><r className="main-text">DEEZ USERS</r>
                    </div>
                    <div className="flex flex-row w-8/12 mx-auto pt-8">
                        <Image className="w-[77px] h-[66px] object-cover"
                            src={quotes}
                            width={287}
                            height={349}
                            alt="cover"
                        />
                        <div className="flex flex-col pl-4">
                            <div className="lato-16-blue main-text">Giving these half assed Children donations so they can study and failGiving these half assed Children donations so they can study and failGiving these half assed Children donations so they can study and failGiving these half assed Children donations so they can study and failGiving these half assed Children donations so they can study and failGiving these half assed Children donations so they can study and fail</div>
                            <div className="pt-6">
                                <div className="lato-18-main-bold"> Name Goes Here</div>
                                <div className="lato-16-blue main-text">Designation Goes Here</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:max-lg:flex hidden flex-row pb-16 pt-16 w-auto items-center justify-center">
                <Image className="w-full h-96 object-cover"
                    src={testimonialbg}
                    width={287}
                    height={349}
                    alt="cover"
                />
                <div className="flex flex-col absolute justify-between">
                    <div className="secular-20 w-4/5 mx-auto">
                        <r className="main-text">TESTIMONIALS</r> <br></br>
                        <r className="blue-text">FROM </r><r className="main-text">DEEZ USERS</r>
                    </div>
                    <div className="flex flex-row w-8/12 mx-auto pt-8">
                        <Image className="w-[77px] h-[66px] object-cover"
                            src={quotes}
                            width={287}
                            height={349}
                            alt="cover"
                        />
                        <div className="flex flex-col pl-4">
                            <div className="lato-16-blue main-text">Giving these half assed Children donations so they can study and failGiving these half assed Children donations so they can study and failGiving these half assed Children donations so they can study and failGiving these half assed Children donations so they can study and failGiving these half assed Children donations so they can study and failGiving these half assed Children donations so they can study and fail</div>
                            <div className="pt-6">
                                <div className="lato-18-main-bold"> Name Goes Here</div>
                                <div className="lato-16-blue main-text">Designation Goes Here</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:max-md:flex hidden flex-row pb-16 pt-16 w-auto items-center justify-center">
                <Image className="w-full h-80 object-cover"
                    src={testimonialbg}
                    width={287}
                    height={349}
                    alt="cover"
                />
                <div className="flex flex-col absolute justify-between">
                    <div className="secular-20 w-4/5 mx-auto text-center">
                        <r className="main-text">TESTIMONIALS </r>
                        <r className="blue-text">FROM </r><r className="main-text">DEEZ USERS</r>
                    </div>
                    <div className="flex flex-row w-4/5 mx-auto pt-8">
                        <Image className="w-[67px] h-[56px] object-cover"
                            src={quotes}
                            width={287}
                            height={349}
                            alt="cover"
                        />
                        <div className="flex flex-col pl-4">
                            <div className="lato-16-blue main-text">Giving these half assed Children donations so they can study and failGiving these half assed Children donations so they can study and failGiving these half assed Children donations so they can study and failGiving these half assed Children donations so they can study and failGiving these half assed Children donations so they can study and failGiving these half assed Children donations so they can study and fail</div>
                            <div className="pt-2">
                                <div className="lato-18-main-bold"> Name Goes Here</div>
                                <div className="lato-16-blue main-text">Designation Goes Here</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-sm:flex hidden flex-row pb-16 pt-16 w-auto items-center justify-center">
                <Image className="w-full h-96 object-cover"
                    src={testimonialbg}
                    width={287}
                    height={349}
                    alt="cover"
                />
                <div className="flex flex-col absolute justify-between">
                    <div className="secular-20 w-4/5 mx-auto text-center">
                        <r className="main-text">TESTIMONIALS </r>
                        <r className="blue-text">FROM </r><r className="main-text">DEEZ USERS</r>
                    </div>
                    <div className="flex flex-row w-11/12 mx-auto pt-4">
                        <Image className="w-[57px] h-[46px] object-cover"
                            src={quotes}
                            width={287}
                            height={349}
                            alt="cover"
                        />
                        <div className="flex flex-col pl-4">
                            <div className="lato-14-blue main-text">donations so they can study and failGiving these half assed Children donations so they can study and failGiving these half assed Children donations so they can study and failGiving these half assed Children donations so they can study and failGiving these half assed Children donations so they can study and fail</div>
                            <div className="pt-2">
                                <div className="lato-16-main-bold"> Name Goes Here</div>
                                <div className=" lato-14-blue main-text">Designation Goes Here</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default testimonial