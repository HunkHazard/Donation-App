import Image from "next/image";
import ahad from "../../public/ahad_1.png";
import uneeb from "../../public/Uneeb.png";
import logo from "../../public/logo.svg";
import Nav from "../../components/Nav";

const AboutUs = () => {
    return (
        <div  className="blue-bg">
            <Nav />
            <div className="2xl:flex hidden flex-col w-full h-auto">
                <div className="mt-[34px] mb-[34px] flex flex-row items-center my-auto mx-auto secular-40px-45lh main-text ">
                    <div draggable="false" aria-labelledby="title" className="relative py-6 px-12 border-2 border-main group text-main">
                        <span id="title" className="text-4xl uppercase font-light tracking-wider">MEET OUR TEAM</span>
                        <div className="absolute inset-0 py-6 px-12 main-accent text-center mx-auto text-white motion-safe:transition-[clip-path] motion-safe:duration-500 ease-out [clip-path:circle(20%_at_120%_120%)] group-hover:[clip-path:circle(170%_at_120%_120%)]" aria-hidden="true">
                            <span className="text-4xl uppercase font-light tracking-wider">THE GOATS</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row w-4/5 mx-auto justify-between pt-8">
                    <div className="flex flex-col">
                        <div className="w-auto h-auto">
                            <Image className="w-96 h-auto object-cover"
                                src={ahad}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                        </div>
                        <div className="secular-25px text-white pt-2  pb-1 uppercase mx-auto">
                            Ahad Sajjad
                        </div>
                        <div className="bg-gray-200 w-4/5 mx-auto h-[0.5px]"></div>
                        <div className="lato-14-white-centered pt-2 text-white uppercase mx-auto">
                            UI/UX Designer<br></br>Frontend Developer
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="w-auto h-auto">
                            <Image className="w-96 h-auto object-cover"
                                src={uneeb}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                        </div>
                        <div className="secular-25px text-white pt-2 pb-1 uppercase mx-auto">
                            Uneeb Bin Aftab
                        </div>
                        <div className="bg-gray-200 w-4/5 mx-auto h-[0.5px]"></div>
                        <div className="lato-14-white-centered pt-2 text-white uppercase mx-auto">
                            Backend Developer<br></br>Frontend Developer
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="w-auto h-auto">
                            <Image className="w-96 h-auto object-cover"
                                src={ahad}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                        </div>
                        <div className="secular-25px text-white pt-2 pb-1 uppercase mx-auto">
                            Jawad Kabeer
                        </div>
                        <div className="bg-gray-200 w-4/5 mx-auto h-[0.5px]"></div>
                        <div className="lato-14-white-centered pt-2 text-white uppercase mx-auto">
                            Backend Developer<br></br>Database Manager
                        </div>
                    </div>
                </div>
                <div className="mt-[34px] mb-[34px]  pt-8 flex flex-row items-center my-auto mx-auto secular-40px-45lh main-text ">
                    <div draggable="false" aria-labelledby="title" className="relative py-6 px-12 border-2 border-main group text-main">
                        <span id="title" className="text-4xl uppercase font-light tracking-wider">OUR MISSION</span>
                        <div className="absolute inset-0 py-6 px-12 main-accent text-center mx-auto text-white motion-safe:transition-[clip-path] motion-safe:duration-500 ease-out [clip-path:circle(20%_at_120%_120%)] group-hover:[clip-path:circle(170%_at_120%_120%)]" aria-hidden="true">
                            <span className="text-4xl uppercase text-center mx-auto font-light tracking-wider">ABOUT US</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row w-3/5 items-center mx-auto pt-8">
                        <div className="w-auto h-auto mx-auto">
                            <Image className="w-40 h-auto object-cover"
                                src={logo}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                        </div>
                        <div className=" lato-16-white w-4/5 ml-8 mx-auto text-justify">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </div>
                    </div>
                    <div className="flex flex-row w-3/5 items-center mx-auto pt-8">
                        <div className=" lato-16-white w-4/5 ml-8 mx-auto text-justify">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </div>
                        <div className="w-auto h-auto mx-auto">
                            <Image className="w-40 h-auto object-cover"
                                src={logo}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:max-2xl:flex hidden flex-col w-full h-auto">
                <div className="mt-[34px] mb-[34px] flex flex-row items-center my-auto mx-auto secular-40px-45lh main-text ">
                    <div draggable="false" aria-labelledby="title" className="relative py-4 px-8 border-2 border-main group text-main">
                        <span id="title" className="text-4xl uppercase font-light tracking-wider">MEET OUR TEAM</span>
                        <div className="absolute inset-0 py-4 px-8 main-accent text-center mx-auto text-white motion-safe:transition-[clip-path] motion-safe:duration-500 ease-out [clip-path:circle(20%_at_120%_120%)] group-hover:[clip-path:circle(170%_at_120%_120%)]" aria-hidden="true">
                            <span className="text-4xl uppercase font-light tracking-wider">THE GOATS</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row w-4/5 mx-auto justify-between pt-4">
                    <div className="flex flex-col">
                        <div className="w-auto h-auto">
                            <Image className="w-96 h-auto object-cover"
                                src={ahad}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                        </div>
                        <div className="secular-25px text-white pt-2  pb-1 uppercase mx-auto">
                            Ahad Sajjad
                        </div>
                        <div className="bg-gray-200 w-4/5 mx-auto h-[0.5px]"></div>
                        <div className="lato-14-white-centered pt-2 text-white uppercase mx-auto">
                            UI/UX Designer<br></br>Frontend Developer
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="w-auto h-auto">
                            <Image className="w-96 h-auto object-cover"
                                src={uneeb}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                        </div>
                        <div className="secular-25px text-white pt-2 pb-1 uppercase mx-auto">
                            Uneeb Bin Aftab
                        </div>
                        <div className="bg-gray-200 w-4/5 mx-auto h-[0.5px]"></div>
                        <div className="lato-14-white-centered pt-2 text-white uppercase mx-auto">
                            Backend Developer<br></br>Frontend Developer
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="w-auto h-auto">
                            <Image className="w-96 h-auto object-cover"
                                src={ahad}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                        </div>
                        <div className="secular-25px text-white pt-2 pb-1 uppercase mx-auto">
                            Jawad Kabeer
                        </div>
                        <div className="bg-gray-200 w-4/5 mx-auto h-[0.5px]"></div>
                        <div className="lato-14-white-centered pt-2 text-white uppercase mx-auto">
                            Backend Developer<br></br>Database Manager
                        </div>
                    </div>
                </div>
                <div className="mt-[34px] mb-[34px]  pt-8 flex flex-row items-center my-auto mx-auto secular-40px-45lh main-text ">
                    <div draggable="false" aria-labelledby="title" className="relative py-4 px-8 border-2 border-main group text-main">
                        <span id="title" className="text-4xl uppercase font-light tracking-wider">OUR MISSION</span>
                        <div className="absolute inset-0 py-4 px-8 main-accent text-center mx-auto text-white motion-safe:transition-[clip-path] motion-safe:duration-500 ease-out [clip-path:circle(20%_at_120%_120%)] group-hover:[clip-path:circle(170%_at_120%_120%)]" aria-hidden="true">
                            <span className="text-4xl uppercase text-center mx-auto font-light tracking-wider">ABOUT US</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row w-4/5 items-center mx-auto pt-6">
                        <div className="w-auto h-auto mx-auto">
                            <Image className="w-40 h-auto object-cover"
                                src={logo}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                        </div>
                        <div className=" lato-16-white w-4/5 ml-4 mx-auto text-justify">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </div>
                    </div>
                    <div className="flex flex-row w-4/5 items-center mx-auto pt-8">
                        <div className=" lato-16-white w-4/5 mr-4 mx-auto text-justify">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </div>
                        <div className="w-auto h-auto mx-auto">
                            <Image className="w-40 h-auto object-cover"
                                src={logo}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:max-lg:flex hidden flex-col w-full h-auto">
                <div className="mt-[34px] mb-[34px] flex flex-row items-center my-auto mx-auto secular-30px-white main-text ">
                    <div draggable="false" aria-labelledby="title" className="relative py-2 px-4 border-2 border-main group text-main">
                        <span id="title" className="text-4xl uppercase font-light tracking-wider">MEET OUR TEAM</span>
                        <div className="absolute inset-0 py-2 px-4 main-accent text-center mx-auto text-white motion-safe:transition-[clip-path] motion-safe:duration-500 ease-out [clip-path:circle(20%_at_120%_120%)] group-hover:[clip-path:circle(170%_at_120%_120%)]" aria-hidden="true">
                            <span className="text-4xl uppercase font-light tracking-wider">THE GOATS</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row w-11/12 mx-auto justify-between pt-4">
                    <div className="flex flex-col">
                        <div className="w-auto h-auto">
                            <Image className="w-96 h-auto object-cover"
                                src={ahad}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                        </div>
                        <div className="secular-25px text-white pt-2  pb-1 uppercase mx-auto">
                            Ahad Sajjad
                        </div>
                        <div className="bg-gray-200 w-3/6 mx-auto h-[0.5px]"></div>
                        <div className="lato-14-white-centered pt-2 text-white uppercase mx-auto">
                            UI/UX Designer<br></br>Frontend Developer
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="w-auto h-auto">
                            <Image className="w-96 h-auto object-cover"
                                src={uneeb}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                        </div>
                        <div className="secular-25px text-white pt-2 pb-1 uppercase mx-auto">
                            Uneeb Bin Aftab
                        </div>
                        <div className="bg-gray-200 w-3/6 mx-auto h-[0.5px]"></div>
                        <div className="lato-14-white-centered pt-2 text-white uppercase mx-auto">
                            Backend Developer<br></br>Frontend Developer
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="w-auto h-auto">
                            <Image className="w-96 h-auto object-cover"
                                src={ahad}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                        </div>
                        <div className="secular-25px text-white pt-2 pb-1 uppercase mx-auto">
                            Jawad Kabeer
                        </div>
                        <div className="bg-gray-200 w-3/6 mx-auto h-[0.5px]"></div>
                        <div className="lato-14-white-centered pt-2 text-white uppercase mx-auto">
                            Backend Developer<br></br>Database Manager
                        </div>
                    </div>
                </div>
                <div className="mt-[34px] mb-[34px]  pt-8 flex flex-row items-center my-auto mx-auto secular-30px-white main-text ">
                    <div draggable="false" aria-labelledby="title" className="relative py-2 px-4 border-2 border-main group text-main">
                        <span id="title" className="text-4xl uppercase font-light tracking-wider">OUR MISSION</span>
                        <div className="absolute inset-0 py-2 px-4 main-accent text-center mx-auto text-white motion-safe:transition-[clip-path] motion-safe:duration-500 ease-out [clip-path:circle(20%_at_120%_120%)] group-hover:[clip-path:circle(170%_at_120%_120%)]" aria-hidden="true">
                            <span className="text-4xl uppercase text-center mx-auto font-light tracking-wider">ABOUT US</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row w-4/5 items-center mx-auto pt-6">
                        <div className="w-auto h-auto mx-auto">
                            <Image className="w-32 h-auto object-cover"
                                src={logo}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                        </div>
                        <div className=" lato-16-white w-4/5 ml-4 mx-auto text-justify">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </div>
                    </div>
                    <div className="flex flex-row w-4/5 items-center mx-auto pt-8">
                        <div className=" lato-16-white w-4/5 mr-4 mx-auto text-justify">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </div>
                        <div className="w-auto h-auto mx-auto">
                            <Image className="w-32 h-auto object-cover"
                                src={logo}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:max-md:flex hidden flex-col w-full h-auto">
                <div className="mt-[34px] mb-[34px] flex flex-row items-center my-auto mx-auto secular-30px-white main-text ">
                    <div draggable="false" aria-labelledby="title" className="relative py-2 px-4 border-2 border-main group text-main">
                        <span id="title" className="text-4xl uppercase font-light tracking-wider">MEET OUR TEAM</span>
                        <div className="absolute inset-0 py-2 px-4 main-accent text-center mx-auto text-white motion-safe:transition-[clip-path] motion-safe:duration-500 ease-out [clip-path:circle(20%_at_120%_120%)] group-hover:[clip-path:circle(170%_at_120%_120%)]" aria-hidden="true">
                            <span className="text-4xl uppercase font-light tracking-wider">THE GOATS</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-4/5 mx-auto justify-between pt-4">
                    <div className="flex flex-col mx-auto pb-4">
                        <div className="w-auto h-auto">
                            <Image className="w-96 h-auto object-cover"
                                src={ahad}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                        </div>
                        <div className="secular-25px text-white pt-2  pb-1 uppercase mx-auto">
                            Ahad Sajjad
                        </div>
                        <div className="bg-gray-200 w-3/6 mx-auto h-[0.5px]"></div>
                        <div className="lato-14-white-centered pt-2 text-white uppercase mx-auto">
                            UI/UX Designer<br></br>Frontend Developer
                        </div>
                    </div>
                    <div className="flex flex-col mx-auto pb-4">
                        <div className="w-auto h-auto">
                            <Image className="w-96 h-auto object-cover"
                                src={uneeb}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                        </div>
                        <div className="secular-25px text-white pt-2 pb-1 uppercase mx-auto">
                            Uneeb Bin Aftab
                        </div>
                        <div className="bg-gray-200 w-3/6 mx-auto h-[0.5px]"></div>
                        <div className="lato-14-white-centered pt-2 text-white uppercase mx-auto">
                            Backend Developer<br></br>Frontend Developer
                        </div>
                    </div>
                    <div className="flex flex-col mx-auto">
                        <div className="w-auto h-auto">
                            <Image className="w-96 h-auto object-cover"
                                src={ahad}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                        </div>
                        <div className="secular-25px text-white pt-2 pb-1 uppercase mx-auto">
                            Jawad Kabeer
                        </div>
                        <div className="bg-gray-200 w-3/6 mx-auto h-[0.5px]"></div>
                        <div className="lato-14-white-centered pt-2 text-white uppercase mx-auto">
                            Backend Developer<br></br>Database Manager
                        </div>
                    </div>
                </div>
                <div className="mt-[34px] mb-[34px]  pt-8 flex flex-row items-center my-auto mx-auto secular-30px-white main-text ">
                    <div draggable="false" aria-labelledby="title" className="relative py-2 px-4 border-2 border-main group text-main">
                        <span id="title" className="text-4xl uppercase font-light tracking-wider">OUR MISSION</span>
                        <div className="absolute inset-0 py-2 px-4 main-accent text-center mx-auto text-white motion-safe:transition-[clip-path] motion-safe:duration-500 ease-out [clip-path:circle(20%_at_120%_120%)] group-hover:[clip-path:circle(170%_at_120%_120%)]" aria-hidden="true">
                            <span className="text-4xl uppercase text-center mx-auto font-light tracking-wider">ABOUT US</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col w-4/5 items-center mx-auto pt-6">
                        <div className="w-auto h-auto mx-auto pb-6">
                            <Image className="w-28 h-auto object-cover"
                                src={logo}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                        </div>
                        <div className="bg-gray-200 w-4/6 mx-auto h-[0.5px]"></div>
                        <div className=" lato-16-white w-11/12 mx-auto text-justify pt-4">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </div>
                    </div>
                    <div className="flex flex-col w-4/5 items-center mx-auto pt-6">
                        <div className="w-auto h-auto mx-auto pb-6">
                            <Image className="w-28 h-auto object-cover"
                                src={logo}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                        </div>
                        <div className="bg-gray-200 w-4/6 mx-auto h-[0.5px]"></div>
                        <div className=" lato-16-white w-11/12 mx-auto text-justify pt-4">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-sm:flex hidden flex-col w-full h-auto">
                <div className="mt-[34px] mb-[34px] flex flex-row items-center my-auto mx-auto secular-25px-centered main-text ">
                    <div draggable="false" aria-labelledby="title" className="relative py-2 px-4 border-2 border-main group text-main">
                        <span id="title" className="text-4xl uppercase font-light tracking-wider">MEET OUR TEAM</span>
                        <div className="absolute inset-0 py-2 px-4 main-accent text-center mx-auto text-white motion-safe:transition-[clip-path] motion-safe:duration-500 ease-out [clip-path:circle(20%_at_120%_120%)] group-hover:[clip-path:circle(170%_at_120%_120%)]" aria-hidden="true">
                            <span className="text-4xl uppercase font-light tracking-wider">THE GOATS</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-4/5 mx-auto justify-between pt-4">
                    <div className="flex flex-col mx-auto pb-4">
                        <div className="w-auto h-auto">
                            <Image className="w-80 h-auto object-cover"
                                src={ahad}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                        </div>
                        <div className="secular-25px text-white pt-2  pb-1 uppercase mx-auto">
                            Ahad Sajjad
                        </div>
                        <div className="bg-gray-200 w-3/6 mx-auto h-[0.5px]"></div>
                        <div className="lato-14-white-centered pt-2 text-white uppercase mx-auto">
                            UI/UX Designer<br></br>Frontend Developer
                        </div>
                    </div>
                    <div className="flex flex-col mx-auto pb-4">
                        <div className="w-auto h-auto">
                            <Image className="w-80 h-auto object-cover"
                                src={uneeb}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                        </div>
                        <div className="secular-25px text-white pt-2 pb-1 uppercase mx-auto">
                            Uneeb Bin Aftab
                        </div>
                        <div className="bg-gray-200 w-3/6 mx-auto h-[0.5px]"></div>
                        <div className="lato-14-white-centered pt-2 text-white uppercase mx-auto">
                            Backend Developer<br></br>Frontend Developer
                        </div>
                    </div>
                    <div className="flex flex-col mx-auto">
                        <div className="w-auto h-auto">
                            <Image className="w-80 h-auto object-cover"
                                src={ahad}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                        </div>
                        <div className="secular-25px text-white pt-2 pb-1 uppercase mx-auto">
                            Jawad Kabeer
                        </div>
                        <div className="bg-gray-200 w-3/6 mx-auto h-[0.5px]"></div>
                        <div className="lato-14-white-centered pt-2 text-white uppercase mx-auto">
                            Backend Developer<br></br>Database Manager
                        </div>
                    </div>
                </div>
                <div className="mt-[34px] mb-[34px]  pt-8 flex flex-row items-center my-auto mx-auto secular-25px-centered main-text ">
                    <div draggable="false" aria-labelledby="title" className="relative py-2 px-4 border-2 border-main group text-main">
                        <span id="title" className="text-4xl uppercase font-light tracking-wider">OUR MISSION</span>
                        <div className="absolute inset-0 py-2 px-4 main-accent text-center mx-auto text-white motion-safe:transition-[clip-path] motion-safe:duration-500 ease-out [clip-path:circle(20%_at_120%_120%)] group-hover:[clip-path:circle(170%_at_120%_120%)]" aria-hidden="true">
                            <span className="text-4xl uppercase text-center mx-auto font-light tracking-wider">ABOUT US</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col w-4/5 items-center mx-auto pt-6">
                        <div className="w-auto h-auto mx-auto pb-6">
                            <Image className="w-28 h-auto object-cover"
                                src={logo}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                        </div>
                        <div className="bg-gray-200 w-4/6 mx-auto h-[0.5px]"></div>
                        <div className=" lato-16-white w-11/12 mx-auto text-justify pt-4">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </div>
                    </div>
                    <div className="flex flex-col w-4/5 items-center mx-auto pt-6">
                        <div className="w-auto h-auto mx-auto pb-6">
                            <Image className="w-28 h-auto object-cover"
                                src={logo}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                        </div>
                        <div className="bg-gray-200 w-4/6 mx-auto h-[0.5px]"></div>
                        <div className=" lato-16-white w-11/12 mx-auto text-justify pt-4">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </div>
                    </div>
                </div>
            </div>
            {/* <body className="blue-bg">
            </body> */}
        </div>
    )
}

export default AboutUs