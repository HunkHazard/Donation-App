import Image from "next/image";
import testimonialbg from "../public/testimonialbg.png";
import quotes from "../public/quotes.svg";
const testimonial = () => {
    return (
        <div>
            <div className="lg:flex hidden flex-row pb-16 pt-16 w-auto items-center justify-center">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <Image className="w-full h-72 object-cover"
                            src={testimonialbg}
                            width={287}
                            height={349}
                            alt="cover"
                        />
                        <div className="flex flex-col absolute justify-between">
                            <div className="secular-25px w-4/5 mx-auto">
                                <r className="main-text">TESTIMONIALS</r> <br></br>
                                <r className="blue-text">FROM </r><r className="main-text">OUR USERS</r>
                            </div>
                            <div className="flex flex-row w-8/12 mx-auto pt-8">
                                <Image className="w-[77px] h-[66px] object-cover"
                                    src={quotes}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                                <div className="flex flex-col pl-4">
                                    <div className="lato-16-blue main-text">Amazing platform! I donated to a case focused on education, and I couldn't be happier with the experience. The process was seamless, and I felt confident that my contribution would make a real impact. Keep up the excellent work!</div>
                                    <div className="pt-6">
                                        <div className="lato-18-main-bold"> Ahad Sajjad</div>
                                        <div className="lato-16-blue main-text">Creator</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <Image className="w-full h-72 object-cover"
                            src={testimonialbg}
                            width={287}
                            height={349}
                            alt="cover"
                        />
                        <div className="flex flex-col absolute justify-between">
                            <div className="secular-25px w-4/5 mx-auto">
                                <r className="main-text">TESTIMONIALS</r> <br></br>
                                <r className="blue-text">FROM </r><r className="main-text">OUR USERS</r>
                            </div>
                            <div className="flex flex-row w-8/12 mx-auto pt-8">
                                <Image className="w-[77px] h-[66px] object-cover"
                                    src={quotes}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                                <div className="flex flex-col pl-4">
                                    <div className="lato-16-blue main-text">I've always wanted to support educational causes, but finding trustworthy platforms was a challenge. Thankfully, I discovered this donation website. Not only did I find a variety of compelling cases to contribute to, but the transparency and updates provided gave me peace of mind. It's a fantastic platform for making a difference!</div>
                                    <div className="pt-6">
                                        <div className="lato-18-main-bold"> Uneeb Bin Aftab</div>
                                        <div className="lato-16-blue main-text">Creator</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <Image className="w-full h-72 object-cover"
                            src={testimonialbg}
                            width={287}
                            height={349}
                            alt="cover"
                        />
                        <div className="flex flex-col absolute justify-between">
                            <div className="secular-25px w-4/5 mx-auto">
                                <r className="main-text">TESTIMONIALS</r> <br></br>
                                <r className="blue-text">FROM </r><r className="main-text">OUR USERS</r>
                            </div>
                            <div className="flex flex-row w-8/12 mx-auto pt-8">
                                <Image className="w-[77px] h-[66px] object-cover"
                                    src={quotes}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                                <div className="flex flex-col pl-4">
                                    <div className="lato-16-blue main-text">Kudos to the team behind this donation website! I recently made a donation to an education-focused case, and the whole experience was incredibly user-friendly. The website's intuitive interface, detailed case descriptions, and secure payment process made me feel confident in my decision. I highly recommend this platform to anyone passionate about supporting education!</div>
                                    <div className="pt-6">
                                        <div className="lato-18-main-bold"> Jawad Kabeer</div>
                                        <div className="lato-16-blue main-text">Creator</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    {/* <div id="slide4" className="carousel-item relative w-full">
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
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div> */}
                </div>

            </div>
            <div className="md:max-lg:flex hidden flex-row pb-16 pt-16 w-auto items-center justify-center">
                <div className="carousel w-full">
                    <div id="slide1md" className="carousel-item relative w-full">
                        <Image className="w-full h-72 object-cover"
                            src={testimonialbg}
                            width={287}
                            height={349}
                            alt="cover"
                        />
                        <div className="flex flex-col absolute justify-between">
                            <div className="secular-20 w-4/5 mx-auto">
                                <r className="main-text">TESTIMONIALS</r> <br></br>
                                <r className="blue-text">FROM </r><r className="main-text">OUR USERS</r>
                            </div>
                            <div className="flex flex-row w-8/12 mx-auto pt-8">
                                <Image className="w-[77px] h-[66px] object-cover"
                                    src={quotes}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                                <div className="flex flex-col pl-4">
                                    <div className="lato-16-blue main-text">Amazing platform! I donated to a case focused on education, and I couldn't be happier with the experience. The process was seamless, and I felt confident that my contribution would make a real impact. Keep up the excellent work</div>
                                    <div className="pt-6">
                                        <div className="lato-18-main-bold"> Ahad Sajjad</div>
                                        <div className="lato-16-blue main-text">Creator</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3md" className="btn btn-circle">❮</a>
                            <a href="#slide2md" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2md" className="carousel-item relative w-full">
                        <Image className="w-full h-72 object-cover"
                            src={testimonialbg}
                            width={287}
                            height={349}
                            alt="cover"
                        />
                        <div className="flex flex-col absolute justify-between">
                            <div className="secular-20 w-4/5 mx-auto">
                                <r className="main-text">TESTIMONIALS</r> <br></br>
                                <r className="blue-text">FROM </r><r className="main-text">OUR USERS</r>
                            </div>
                            <div className="flex flex-row w-8/12 mx-auto pt-8">
                                <Image className="w-[77px] h-[66px] object-cover"
                                    src={quotes}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                                <div className="flex flex-col pl-4">
                                    <div className="lato-16-blue main-text">I've always wanted to support educational causes, but finding trustworthy platforms was a challenge. Thankfully, I discovered this donation website. Not only did I find a variety of compelling cases to contribute to, but the transparency and updates provided gave me peace of mind. It's a fantastic platform for making a difference!</div>
                                    <div className="pt-6">
                                        <div className="lato-18-main-bold"> Uneeb Bin Aftab</div>
                                        <div className="lato-16-blue main-text">Creator</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1md" className="btn btn-circle">❮</a>
                            <a href="#slide3md" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3md" className="carousel-item relative w-full">
                        <Image className="w-full h-72 object-cover"
                            src={testimonialbg}
                            width={287}
                            height={349}
                            alt="cover"
                        />
                        <div className="flex flex-col absolute justify-between">
                            <div className="secular-20 w-4/5 mx-auto">
                                <r className="main-text">TESTIMONIALS</r> <br></br>
                                <r className="blue-text">FROM </r><r className="main-text">OUR USERS</r>
                            </div>
                            <div className="flex flex-row w-8/12 mx-auto pt-8">
                                <Image className="w-[77px] h-[66px] object-cover"
                                    src={quotes}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                                <div className="flex flex-col pl-4">
                                    <div className="lato-16-blue main-text">Kudos to the team behind this donation website! I recently made a donation to an education-focused case, and the whole experience was incredibly user-friendly. The website's intuitive interface, detailed case descriptions, and secure payment process made me feel confident in my decision. I highly recommend this platform to anyone passionate about supporting education!</div>
                                    <div className="pt-6">
                                        <div className="lato-18-main-bold"> Jawad Kabeer</div>
                                        <div className="lato-16-blue main-text">Creator</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2md" className="btn btn-circle">❮</a>
                            <a href="#slide1md" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:max-md:flex hidden flex-row pb-16 pt-16 w-auto items-center justify-center">

                <div className="carousel w-full">
                    <div id="slide1sm" className="carousel-item relative w-full">
                        <Image className="w-full h-72 object-cover"
                            src={testimonialbg}
                            width={287}
                            height={349}
                            alt="cover"
                        />
                        <div className="flex flex-col absolute justify-between">
                            <div className="secular-20 w-4/5 mx-auto text-center">
                                <r className="main-text">TESTIMONIALS </r>
                                <r className="blue-text">FROM </r><r className="main-text">OUR USERS</r>
                            </div>
                            <div className="flex flex-row w-4/5 mx-auto pt-8">
                                <Image className="w-[67px] h-[56px] object-cover"
                                    src={quotes}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                                <div className="flex flex-col pl-4">
                                    <div className="lato-16-blue main-text">Amazing platform! I donated to a case focused on education, and I couldn't be happier with the experience. The process was seamless, and I felt confident that my contribution would make a real impact. Keep up the excellent work!</div>
                                    <div className="pt-2">
                                        <div className="lato-18-main-bold"> Ahad Sajjad</div>
                                        <div className="lato-16-blue main-text">Creator</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3sm" className="btn btn-circle">❮</a>
                            <a href="#slide2sm" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2sm" className="carousel-item relative w-full">
                        <Image className="w-full h-72 object-cover"
                            src={testimonialbg}
                            width={287}
                            height={349}
                            alt="cover"
                        />
                        <div className="flex flex-col absolute justify-between">
                            <div className="secular-20 w-4/5 mx-auto text-center">
                                <r className="main-text">TESTIMONIALS </r>
                                <r className="blue-text">FROM </r><r className="main-text">OUR USERS</r>
                            </div>
                            <div className="flex flex-row w-4/5 mx-auto pt-8">
                                <Image className="w-[67px] h-[56px] object-cover"
                                    src={quotes}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                                <div className="flex flex-col pl-4">
                                    <div className="lato-16-blue main-text">I've always wanted to support educational causes, but finding trustworthy platforms was a challenge. Thankfully, I discovered this donation website. Not only did I find a variety of compelling cases to contribute to, but the transparency and updates provided gave me peace of mind. It's a fantastic platform for making a difference!</div>
                                    <div className="pt-2">
                                        <div className="lato-18-main-bold"> Uneeb Bin Aftab</div>
                                        <div className="lato-16-blue main-text">Creator</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1sm" className="btn btn-circle">❮</a>
                            <a href="#slide3sm" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3sm" className="carousel-item relative w-full">
                        <Image className="w-full h-72 object-cover"
                            src={testimonialbg}
                            width={287}
                            height={349}
                            alt="cover"
                        />
                        <div className="flex flex-col absolute justify-between">
                            <div className="secular-20 w-4/5 mx-auto text-center">
                                <r className="main-text">TESTIMONIALS </r>
                                <r className="blue-text">FROM </r><r className="main-text">OUR USERS</r>
                            </div>
                            <div className="flex flex-row w-4/5 mx-auto pt-8">
                                <Image className="w-[67px] h-[56px] object-cover"
                                    src={quotes}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                                <div className="flex flex-col pl-4">
                                    <div className="lato-16-blue main-text">Kudos to the team behind this donation website! I recently made a donation to an education-focused case, and the whole experience was incredibly user-friendly. The website's intuitive interface, detailed case descriptions, and secure payment process made me feel confident in my decision. I highly recommend this platform to anyone passionate about supporting education!</div>
                                    <div className="pt-2">
                                        <div className="lato-18-main-bold"> Jawad Kabeer</div>
                                        <div className="lato-16-blue main-text">Creator</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2sm" className="btn btn-circle">❮</a>
                            <a href="#slide1sm" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-sm:flex hidden flex-row pb-16 pt-16 w-auto items-center justify-center">

                <div className="carousel w-full">
                    <div id="slide1smx" className="carousel-item relative w-full">
                        <Image className="w-full h-72 object-cover"
                            src={testimonialbg}
                            width={287}
                            height={349}
                            alt="cover"
                        />
                        <div className="flex flex-col absolute justify-between">
                            <div className="secular-20 w-4/5 mx-auto text-center">
                                <r className="main-text">TESTIMONIALS </r>
                                <r className="blue-text">FROM </r><r className="main-text">OUR USERS</r>
                            </div>
                            <div className="flex flex-row w-11/12 mx-auto pt-4">
                                <Image className="w-[57px] h-[46px] object-cover"
                                    src={quotes}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                                <div className="flex flex-col pl-4">
                                    <div className="lato-14-blue main-text">Amazing platform! I donated to a case focused on education, and I couldn't be happier with the experience. The process was seamless, and I felt confident that my contribution would make a real impact. Keep up the excellent work!</div>
                                    <div className="pt-2">
                                        <div className="lato-16-main-bold"> Ahad Sajjad</div>
                                        <div className=" lato-14-blue main-text">Creator</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3smx" className="btn btn-circle">❮</a>
                            <a href="#slide2smx" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2smx" className="carousel-item relative w-full">
                        <Image className="w-full h-72 object-cover"
                            src={testimonialbg}
                            width={287}
                            height={349}
                            alt="cover"
                        />
                        <div className="flex flex-col absolute justify-between">
                            <div className="secular-20 w-4/5 mx-auto text-center">
                                <r className="main-text">TESTIMONIALS </r>
                                <r className="blue-text">FROM </r><r className="main-text">OUR USERS</r>
                            </div>
                            <div className="flex flex-row w-11/12 mx-auto pt-4">
                                <Image className="w-[57px] h-[46px] object-cover"
                                    src={quotes}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                                <div className="flex flex-col pl-4">
                                    <div className="lato-14-blue main-text">I've always wanted to support educational causes, but finding trustworthy platforms was a challenge. Thankfully, I discovered this donation website. Not only did I find a variety of compelling cases to contribute to, but the transparency and updates provided gave me peace of mind. It's a fantastic platform for making a difference</div>
                                    <div className="pt-2">
                                        <div className="lato-16-main-bold"> Uneeb Bin Aftab</div>
                                        <div className=" lato-14-blue main-text">Creator</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1smx" className="btn btn-circle">❮</a>
                            <a href="#slide3smx" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3smx" className="carousel-item relative w-full">
                        <Image className="w-full h-72 object-cover"
                            src={testimonialbg}
                            width={287}
                            height={349}
                            alt="cover"
                        />
                        <div className="flex flex-col absolute justify-between">
                            <div className="secular-20 w-4/5 mx-auto text-center">
                                <r className="main-text">TESTIMONIALS </r>
                                <r className="blue-text">FROM </r><r className="main-text">OUR USERS</r>
                            </div>
                            <div className="flex flex-row w-11/12 mx-auto pt-4">
                                <Image className="w-[57px] h-[46px] object-cover"
                                    src={quotes}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                                <div className="flex flex-col pl-4">
                                    <div className="lato-14-blue main-text">Kudos to the team behind this donation website! I recently made a donation to an education-focused case, and the whole experience was incredibly user-friendly. The website's intuitive interface, detailed case descriptions, and secure payment process made me feel confident in my decision. I highly recommend this platform to anyone passionate about supporting education!</div>
                                    <div className="pt-2">
                                        <div className="lato-16-main-bold"> Jawad Kabeer</div>
                                        <div className=" lato-14-blue main-text">Creator</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2smx" className="btn btn-circle">❮</a>
                            <a href="#slide1smx" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default testimonial
