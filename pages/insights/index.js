"use client";
import Head from 'next/head';
import LineChart from '../../components/genderchart';
import BarChart from '../../components/educationchart';
import LineChartSmall from '../../components/genderchartsmall';
import BarChartSmall from '../../components/educationchartsmall';
import Nav from '@/components/Nav';
import Image from 'next/image';
import awareness from "../../public/awareness.svg";
import resources from "../../public/resources.svg";
import transparency from "../../public/transparency.svg";
import support from "../../public/support.svg";
import Footer from '../../components/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import video from "../../public/final.mp4";
import { useEffect } from "react";

const insights = () => {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div>
            <Head>
                <title>Insights</title>
                <meta name="Insights" content="Insights into Education in Pakistan" />
            </Head>
            <Nav />

            <div className='lg:flex flex-col hidden'>
                {/* title and dividers */}
                <div className='flex flex-col w-11/12 mx-auto items-center'>
                    <div className="blue-bg w-full h-[0.5px] mt-6 mb-4"></div>
                    <div className=" bebas-90px text-center blue-text"
                    >EDUCATION IN PAKISTAN</div>
                    <div className="blue-bg w-full h-[0.5px] mt-2 mb-6"></div>
                </div>

                {/* Introductory Paragraph */}
                <div className='flex flex-row w-4/5 mx-auto items-center lato-16-blue'>
                    Pakistan, located in South Asia, is the world's fifth-most populous country with a population of over 220 million people. Despite having made some progress in education over the years, Pakistan still faces severe challenges in providing quality education to its citizens. The education crisis in the country is multifaceted and includes factors such as a lack of funding, inadequate infrastructure, insufficiently trained teachers, and societal barriers. According to the United Nations Educational, Scientific, and Cultural Organization (UNESCO), Pakistan has the second-highest number of out-of-school children in the world. The majority of these children come from low-income families living in rural areas and are forced to work to support their families instead of going to school. Moreover, the education gender gap in Pakistan remains significant, with girls being more likely to be out of school than boys.
                </div>

                {/* Illiteracy and Low Education Rate Heading */}
                <div className='flex flex-row w-4/5 mx-auto bebas-45-blue mt-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-700 relative inline-block">
                        <span className="relative text-white">Illiteracy and Low Education Rate</span>
                    </span>
                </div>
                {/* Body Text*/}
                <div className='flex flex-row w-4/5 mx-auto items-center lato-16-blue mt-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    Pakistan is home to the world's second-highest number of out-of-school children (OOSC), with an estimated 22.8 million children aged 5-16 not attending school. This represents 44% of the total population in this age group. In the 5-9 age group, 5 million children are not enrolled in schools, and after primary-school age, the number of OOSC doubles, with 11.4 million adolescents between the ages of 10-14 not receiving formal education.
                    <br></br>
                    <br></br>
                    Disparities based on gender, socio-economic status, and geography are significant. In Sindh, 52% of the poorest children (58% girls) are out of school, and in Balochistan, 78% of girls are out of school. Nearly 10.7 million boys and 8.6 million girls are enrolled in primary education, which drops to 3.6 million boys and 2.8 million girls at the lower secondary level. Boys outnumber girls at every stage of education.
                </div>

                {/*Video*/}
                <div className='w-4/5 mx-auto mt-4' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <video controls className='w-full h-auto'>
                        <source src="/final.mp4" type="video/mp4" />
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                </div>

                {/* Need for Donations Heading*/}
                <div className='flex flex-row w-4/5 mx-auto bebas-45-blue mt-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-700 relative inline-block">
                        <span className="relative text-white">Need for Donations</span>
                    </span>
                </div>
                {/* Body Text*/}
                <div className='flex flex-row w-4/5 mx-auto items-center lato-16-blue mt-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    Education in Pakistan is in dire need of financial assistance. Although there has been an encouraging increase in education budgets, at 2.8% of the total GDP, it is still well short of the 4% target. Donations can help bridge the gap in financing, providing resources to improve the quality of education, expand access to schooling, and address the diverse needs of Pakistan's children.
                </div>
                {/* Graphs*/}
                <div className='flex flex-col w-4/5 mx-auto lato-16-blue mt-4' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <div className='flex flex-col w-auto h-auto items-center mx-auto mb-4 '>
                        <div className=' secular-20px-upper text-center mb-4'>FEMALE LITERACY RATE VS MEN LITERACY RATE</div>
                        <div className='h-auto'><LineChart /></div>
                    </div>
                    <div className='flex flex-col w-auto h-auto mx-auto items-center' data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        <div className=' secular-20px-upper text-center mb-4'>PAKISTAN'S EXPENDITURE ON ARMY VS EDUCATION</div>
                        <div className='h-auto'><BarChart /></div>
                    </div>
                </div>
                {/* Body Text*/}
                <div className='flex flex-row w-4/5 mx-auto items-center lato-16-blue mt-4' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    A donation website focused on education in Pakistan can play a crucial role in the challenges faced by the education sector in the country. By raising awareness about the disheartening reality of education in Pakistan, such a platform can mobilize much-needed funds to support initiatives aimed at improving the education system.
                </div>
                {/* Body Text*/}
                <div className='flex flex-row w-4/5 mx-auto items-center lato-16-blue mt-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    The website can serve as a hub for donors, connecting them with various initiatives and organizations working towards improving education in Pakistan. This will not only simplify the donation process but also provide a transparent and accountable platform for donors to track the impact of their contributions.
                </div>

                {/* How we are helping Heading*/}
                <div className='flex flex-row w-4/5 mx-auto bebas-45-blue mt-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-700 relative inline-block">
                        <span className="relative text-white">How we are helping</span>
                    </span>
                </div>
                {/* Body Text*/}
                <div className='flex flex-row w-4/5 mx-auto items-center lato-16-blue mt-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    The problems faced by Pakistan's education sector are complex and multifaceted. A website focused on education in Pakistan can play a vital role in addressing these issues by:
                </div>
                {/* Points*/}
                <div className='flex flex-row w-4/5 mx-auto items-center mt-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <div className='p-4 border border-dashed border-main  mr-5 h-70 w-auto mx-auto'>
                        <div className='flex flex-col w-auto h-auto items-center mx-auto'>
                            <div className='w-24 mb-4'>
                                <Image className="w-full h-auto object-cover"
                                    src={awareness}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className='lato-16-blue'>
                                By highlighting the various challenges faced by Pakistan's education sector and the importance of education for the country's development, the website can help change public perception and encourage support for educational initiatives.
                            </div>
                        </div>
                    </div>
                    <div className='p-4 border border-dashed border-main ml-5 h-70 w-auto mx-auto' data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        <div className='flex flex-col w-auto h-auto items-center my-auto mx-auto'>
                            <div className='w-28 mb-4 my-auto'>
                                <Image className="w-full h-auto object-cover"
                                    src={resources}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className='lato-16-blue my-auto'>
                                The website can serve as a platform to connect donors with credible organizations and projects working to improve education in Pakistan. By streamlining the donation process, the website can help mobilize much-needed resources to address the crisis.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row w-4/5 mx-auto items-center mt-6 mb-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <div className='p-4 border border-dashed border-main  mr-5 h-max w-auto mx-auto'>
                        <div className='flex flex-col w-auto h-auto items-center mx-auto'>
                            <div className='w-24 mb-4'>
                                <Image className="w-full h-auto object-cover"
                                    src={transparency}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className='lato-16-blue'>
                                By providing a transparent platform for donations, the website can ensure that funds are directed towards effective initiatives and donors can track the impact of their contributions.
                            </div>
                        </div>
                    </div>
                    <div className='p-4 border border-dashed border-main ml-5 h-max w-auto mx-auto' data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        <div className='flex flex-col w-auto h-auto items-center mx-auto my-auto'>
                            <div className='w-24 mb-4 my-auto'>
                                <Image className="w-full h-auto object-cover"
                                    src={support}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className='lato-16-blue'>
                                The website can help identify and prioritize the needs of the most vulnerable and marginalized groups, such as girls, children with disabilities, and those living in remote or conflict-affected areas.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:max-lg:flex flex-col hidden'>
                {/* title and dividers */}
                <div className='flex flex-col w-11/12 mx-auto items-center'>
                    <div className="blue-bg w-full h-[0.5px] mt-6 mb-4"></div>
                    <div className=" bebas-90px text-center blue-text">EDUCATION IN PAKISTAN</div>
                    <div className="blue-bg w-full h-[0.5px] mt-2 mb-6"></div>
                </div>

                {/* Introductory Paragraph */}
                <div className='flex flex-row w-4/5 mx-auto items-center lato-16-blue'>
                    Pakistan, located in South Asia, is the world's fifth-most populous country with a population of over 220 million people. Despite having made some progress in education over the years, Pakistan still faces severe challenges in providing quality education to its citizens. The education crisis in the country is multifaceted and includes factors such as a lack of funding, inadequate infrastructure, insufficiently trained teachers, and societal barriers. According to the United Nations Educational, Scientific, and Cultural Organization (UNESCO), Pakistan has the second-highest number of out-of-school children in the world. The majority of these children come from low-income families living in rural areas and are forced to work to support their families instead of going to school. Moreover, the education gender gap in Pakistan remains significant, with girls being more likely to be out of school than boys.
                </div>

                {/* Illiteracy and Low Education Rate Heading */}
                <div className='flex flex-row w-4/5 mx-auto bebas-45-blue mt-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-700 relative inline-block">
                        <span className="relative text-white">Illiteracy and Low Education Rate</span>
                    </span>
                </div>
                {/* Body Text*/}
                <div className='flex flex-row w-4/5 mx-auto items-center lato-16-blue mt-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    Pakistan is home to the world's second-highest number of out-of-school children (OOSC), with an estimated 22.8 million children aged 5-16 not attending school. This represents 44% of the total population in this age group. In the 5-9 age group, 5 million children are not enrolled in schools, and after primary-school age, the number of OOSC doubles, with 11.4 million adolescents between the ages of 10-14 not receiving formal education.
                    <br></br>
                    <br></br>
                    Disparities based on gender, socio-economic status, and geography are significant. In Sindh, 52% of the poorest children (58% girls) are out of school, and in Balochistan, 78% of girls are out of school. Nearly 10.7 million boys and 8.6 million girls are enrolled in primary education, which drops to 3.6 million boys and 2.8 million girls at the lower secondary level. Boys outnumber girls at every stage of education.
                </div>

                {/*Video*/}
                <div className='w-4/5 mx-auto mt-4' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <video controls className='w-full h-auto'>
                        <source src="/final.mp4" type="video/mp4" />
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                </div>

                {/* Need for Donations Heading*/}
                <div className='flex flex-row w-4/5 mx-auto bebas-45-blue mt-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-700 relative inline-block">
                        <span className="relative text-white">Need for Donations</span>
                    </span>
                </div>
                {/* Body Text*/}
                <div className='flex flex-row w-4/5 mx-auto items-center lato-16-blue mt-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    Education in Pakistan is in dire need of financial assistance. Although there has been an encouraging increase in education budgets, at 2.8% of the total GDP, it is still well short of the 4% target. Donations can help bridge the gap in financing, providing resources to improve the quality of education, expand access to schooling, and address the diverse needs of Pakistan's children.
                </div>
                {/* Graphs*/}
                <div className='flex flex-col w-4/5 mx-auto lato-16-blue mt-4' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <div className='flex flex-col w-auto h-auto items-center mx-auto mb-4 '>
                        <div className=' secular-20px-upper text-center mb-4'>FEMALE LITERACY RATE VS MEN LITERACY RATE</div>
                        <div className='h-auto'><LineChart /></div>
                    </div>
                    <div className='flex flex-col w-auto h-auto mx-auto items-center' data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        <div className=' secular-20px-upper text-center mb-4'>PAKISTAN'S EXPENDITURE ON ARMY VS EDUCATION</div>
                        <div className='h-auto'><BarChart /></div>
                    </div>
                </div>
                {/* Body Text*/}
                <div className='flex flex-row w-4/5 mx-auto items-center lato-16-blue mt-4' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    A donation website focused on education in Pakistan can play a crucial role in the challenges faced by the education sector in the country. By raising awareness about the disheartening reality of education in Pakistan, such a platform can mobilize much-needed funds to support initiatives aimed at improving the education system.
                </div>
                {/* Body Text*/}
                <div className='flex flex-row w-4/5 mx-auto items-center lato-16-blue mt-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    The website can serve as a hub for donors, connecting them with various initiatives and organizations working towards improving education in Pakistan. This will not only simplify the donation process but also provide a transparent and accountable platform for donors to track the impact of their contributions.
                </div>

                {/* How we are helping Heading*/}
                <div className='flex flex-row w-4/5 mx-auto bebas-45-blue mt-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-700 relative inline-block">
                        <span className="relative text-white">How we are helping</span>
                    </span>
                </div>
                {/* Body Text*/}
                <div className='flex flex-row w-4/5 mx-auto items-center lato-16-blue mt-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    The problems faced by Pakistan's education sector are complex and multifaceted. A website focused on education in Pakistan can play a vital role in addressing these issues by:
                </div>
                {/* Points*/}
                <div className='flex flex-row w-4/5 mx-auto items-center mt-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <div className='p-4 border border-dashed border-main  mr-5 h-70 w-auto mx-auto'>
                        <div className='flex flex-col w-auto h-auto items-center mx-auto'>
                            <div className='w-24 mb-4'>
                                <Image className="w-full h-auto object-cover"
                                    src={awareness}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className='lato-16-blue'>
                                By highlighting the various challenges faced by Pakistan's education sector and the importance of education for the country's development, the website can help change public perception and encourage support for educational initiatives.
                            </div>
                        </div>
                    </div>
                    <div className='p-4 border border-dashed border-main ml-5 h-70 w-auto mx-auto'>
                        <div className='flex flex-col w-auto h-auto items-center my-auto mx-auto'>
                            <div className='w-28 mb-4 my-auto'>
                                <Image className="w-full h-auto object-cover"
                                    src={resources}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className='lato-16-blue my-auto'>
                                The website can serve as a platform to connect donors with credible organizations and projects working to improve education in Pakistan. By streamlining the donation process, the website can help mobilize much-needed resources to address the crisis.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row w-4/5 mx-auto items-center mt-6 mb-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <div className='p-4 border border-dashed border-main  mr-5 h-max w-auto mx-auto'>
                        <div className='flex flex-col w-auto h-auto items-center mx-auto'>
                            <div className='w-24 mb-4'>
                                <Image className="w-full h-auto object-cover"
                                    src={transparency}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className='lato-16-blue'>
                                By providing a transparent platform for donations, the website can ensure that funds are directed towards effective initiatives and donors can track the impact of their contributions.
                            </div>
                        </div>
                    </div>
                    <div className='p-4 border border-dashed border-main ml-5 h-max w-auto mx-auto'>
                        <div className='flex flex-col w-auto h-auto items-center mx-auto my-auto'>
                            <div className='w-24 mb-4 my-auto'>
                                <Image className="w-full h-auto object-cover"
                                    src={support}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className='lato-16-blue'>
                                The website can help identify and prioritize the needs of the most vulnerable and marginalized groups, such as girls, children with disabilities, and those living in remote or conflict-affected areas.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sm:max-md:flex flex-col hidden'>
                {/* title and dividers */}
                <div className='flex flex-col w-11/12 mx-auto items-center'>
                    <div className="blue-bg w-full h-[0.5px] mt-6 mb-4"></div>
                    <div className=" bebas-70px text-center blue-text">EDUCATION IN PAKISTAN</div>
                    <div className="blue-bg w-full h-[0.5px] mt-2 mb-6"></div>
                </div>

                {/* Introductory Paragraph */}
                <div className='flex flex-row w-4/5 mx-auto items-center lato-16-blue'>
                    Pakistan, located in South Asia, is the world's fifth-most populous country with a population of over 220 million people. Despite having made some progress in education over the years, Pakistan still faces severe challenges in providing quality education to its citizens. The education crisis in the country is multifaceted and includes factors such as a lack of funding, inadequate infrastructure, insufficiently trained teachers, and societal barriers. According to the United Nations Educational, Scientific, and Cultural Organization (UNESCO), Pakistan has the second-highest number of out-of-school children in the world. The majority of these children come from low-income families living in rural areas and are forced to work to support their families instead of going to school. Moreover, the education gender gap in Pakistan remains significant, with girls being more likely to be out of school than boys.
                </div>

                {/* Illiteracy and Low Education Rate Heading */}
                <div className='flex flex-row w-4/5 mx-auto bebas-35-blue mt-6 items-center' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <span className="mx-auto before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-700 relative inline-block">
                        <span className="mx-auto relative text-white">Illiteracy and Low Education Rate</span>
                    </span>
                </div>
                {/* Body Text*/}
                <div className='flex flex-row w-4/5 mx-auto items-center lato-16-blue mt-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    Pakistan is home to the world's second-highest number of out-of-school children (OOSC), with an estimated 22.8 million children aged 5-16 not attending school. This represents 44% of the total population in this age group. In the 5-9 age group, 5 million children are not enrolled in schools, and after primary-school age, the number of OOSC doubles, with 11.4 million adolescents between the ages of 10-14 not receiving formal education.
                    <br></br>
                    <br></br>
                    Disparities based on gender, socio-economic status, and geography are significant. In Sindh, 52% of the poorest children (58% girls) are out of school, and in Balochistan, 78% of girls are out of school. Nearly 10.7 million boys and 8.6 million girls are enrolled in primary education, which drops to 3.6 million boys and 2.8 million girls at the lower secondary level. Boys outnumber girls at every stage of education.
                </div>

                {/*Video*/}
                <div className='w-4/5 mx-auto mt-4' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <video controls className='w-full h-auto'>
                        <source src="/final.mp4" type="video/mp4" />
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                </div>

                {/* Need for Donations Heading*/}
                <div className='flex flex-row w-4/5 mx-auto bebas-35-blue mt-6 items-center' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <span className="mx-auto before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-700 relative inline-block">
                        <span className="mx-auto relative text-white">Need for Donations</span>
                    </span>
                </div>
                {/* Body Text*/}
                <div className='flex flex-row w-4/5 mx-auto items-center lato-16-blue mt-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    Education in Pakistan is in dire need of financial assistance. Although there has been an encouraging increase in education budgets, at 2.8% of the total GDP, it is still well short of the 4% target. Donations can help bridge the gap in financing, providing resources to improve the quality of education, expand access to schooling, and address the diverse needs of Pakistan's children.
                </div>
                {/* Graphs*/}
                <div className='flex flex-col w-4/5 mx-auto lato-16-blue mt-4' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <div className='flex flex-col w-auto h-auto items-center mx-auto mb-4 '>
                        <div className=' secular-20px-upper text-center mb-4'>FEMALE LITERACY RATE VS MEN LITERACY RATE</div>
                        <div className='h-auto'><LineChart /></div>
                    </div>
                    <div className='flex flex-col w-auto h-auto mx-auto items-center' data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        <div className=' secular-20px-upper text-center mb-4'>PAKISTAN'S EXPENDITURE ON ARMY VS EDUCATION</div>
                        <div className='h-auto'><BarChart /></div>
                    </div>
                </div>
                {/* Body Text*/}
                <div className='flex flex-row w-4/5 mx-auto items-center lato-16-blue mt-4' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    A donation website focused on education in Pakistan can play a crucial role in the challenges faced by the education sector in the country. By raising awareness about the disheartening reality of education in Pakistan, such a platform can mobilize much-needed funds to support initiatives aimed at improving the education system.
                </div>
                {/* Body Text*/}
                <div className='flex flex-row w-4/5 mx-auto items-center lato-16-blue mt-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    The website can serve as a hub for donors, connecting them with various initiatives and organizations working towards improving education in Pakistan. This will not only simplify the donation process but also provide a transparent and accountable platform for donors to track the impact of their contributions.
                </div>

                {/* How we are helping Heading*/}
                <div className='flex flex-row w-4/5 mx-auto bebas-35-blue mt-6 items-center' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <span className="mx-auto before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-700 relative inline-block">
                        <span className="mx-auto relative text-white">How we are helping</span>
                    </span>
                </div>
                {/* Body Text*/}
                <div className='flex flex-row w-4/5 mx-auto items-center lato-16-blue mt-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    The problems faced by Pakistan's education sector are complex and multifaceted. A website focused on education in Pakistan can play a vital role in addressing these issues by:
                </div>
                {/* Points*/}
                <div className='flex flex-row w-4/5 mx-auto items-center mt-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <div className='p-4 border border-dashed border-main  mr-5 h-70 w-auto mx-auto'>
                        <div className='flex flex-col w-auto h-auto items-center mx-auto'>
                            <div className='w-24 mb-4'>
                                <Image className="w-full h-auto object-cover"
                                    src={awareness}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className='lato-16-blue'>
                                By highlighting the various challenges faced by Pakistan's education sector and the importance of education for the country's development, the website can help change public perception and encourage support for educational initiatives.
                            </div>
                        </div>
                    </div>
                    <div className='p-4 border border-dashed border-main ml-5 h-70 w-auto mx-auto'>
                        <div className='flex flex-col w-auto h-auto items-center my-auto mx-auto'>
                            <div className='w-28 mb-4 my-auto'>
                                <Image className="w-full h-auto object-cover"
                                    src={resources}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className='lato-16-blue my-auto'>
                                The website can serve as a platform to connect donors with credible organizations and projects working to improve education in Pakistan. By streamlining the donation process, the website can help mobilize much-needed resources to address the crisis.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row w-4/5 mx-auto items-center mt-6 mb-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <div className='p-4 border border-dashed border-main  mr-5 h-max w-auto mx-auto'>
                        <div className='flex flex-col w-auto h-auto items-center mx-auto'>
                            <div className='w-24 mb-4'>
                                <Image className="w-full h-auto object-cover"
                                    src={transparency}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className='lato-16-blue'>
                                By providing a transparent platform for donations, the website can ensure that funds are directed towards effective initiatives and donors can track the impact of their contributions.
                            </div>
                        </div>
                    </div>
                    <div className='p-4 border border-dashed border-main ml-5 h-max w-auto mx-auto'>
                        <div className='flex flex-col w-auto h-auto items-center mx-auto my-auto'>
                            <div className='w-24 mb-4 my-auto'>
                                <Image className="w-full h-auto object-cover"
                                    src={support}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className='lato-16-blue'>
                                The website can help identify and prioritize the needs of the most vulnerable and marginalized groups, such as girls, children with disabilities, and those living in remote or conflict-affected areas.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-sm:flex flex-col hidden'>
                {/* title and dividers */}
                <div className='flex flex-col w-11/12 mx-auto items-center'>
                    <div className="blue-bg w-full h-[0.5px] mt-6 mb-4"></div>
                    <div className=" bebas-50px text-center blue-text">EDUCATION IN PAKISTAN</div>
                    <div className="blue-bg w-full h-[0.5px] mt-2 mb-6"></div>
                </div>

                {/* Introductory Paragraph */}
                <div className='flex flex-row w-4/5 mx-auto items-center lato-16-blue'>
                    Pakistan, located in South Asia, is the world's fifth-most populous country with a population of over 220 million people. Despite having made some progress in education over the years, Pakistan still faces severe challenges in providing quality education to its citizens. The education crisis in the country is multifaceted and includes factors such as a lack of funding, inadequate infrastructure, insufficiently trained teachers, and societal barriers. According to the United Nations Educational, Scientific, and Cultural Organization (UNESCO), Pakistan has the second-highest number of out-of-school children in the world. The majority of these children come from low-income families living in rural areas and are forced to work to support their families instead of going to school. Moreover, the education gender gap in Pakistan remains significant, with girls being more likely to be out of school than boys.
                </div>

                {/* Illiteracy and Low Education Rate Heading */}
                <div className='flex flex-row w-4/5 mx-auto bebas-25-blue mt-6 items-center' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <span className="mx-auto before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-700 relative inline-block">
                        <span className="mx-auto relative text-white">Illiteracy and Low Education Rate</span>
                    </span>
                </div>
                {/* Body Text*/}
                <div className='flex flex-row w-4/5 mx-auto items-center lato-16-blue mt-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    Pakistan is home to the world's second-highest number of out-of-school children (OOSC), with an estimated 22.8 million children aged 5-16 not attending school. This represents 44% of the total population in this age group. In the 5-9 age group, 5 million children are not enrolled in schools, and after primary-school age, the number of OOSC doubles, with 11.4 million adolescents between the ages of 10-14 not receiving formal education.
                    <br></br>
                    <br></br>
                    Disparities based on gender, socio-economic status, and geography are significant. In Sindh, 52% of the poorest children (58% girls) are out of school, and in Balochistan, 78% of girls are out of school. Nearly 10.7 million boys and 8.6 million girls are enrolled in primary education, which drops to 3.6 million boys and 2.8 million girls at the lower secondary level. Boys outnumber girls at every stage of education.
                </div>

                {/*Video*/}
                <div className='w-4/5 mx-auto mt-4' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <video controls className='w-full h-auto'>
                        <source src="/final.mp4" type="video/mp4" />
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                </div>

                {/* Need for Donations Heading*/}
                <div className='flex flex-row w-4/5 mx-auto bebas-25-blue mt-6 items-center' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <span className="mx-auto before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-700 relative inline-block">
                        <span className="mx-auto relative text-white">Need for Donations</span>
                    </span>
                </div>
                {/* Body Text*/}
                <div className='flex flex-row w-4/5 mx-auto items-center lato-16-blue mt-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    Education in Pakistan is in dire need of financial assistance. Although there has been an encouraging increase in education budgets, at 2.8% of the total GDP, it is still well short of the 4% target. Donations can help bridge the gap in financing, providing resources to improve the quality of education, expand access to schooling, and address the diverse needs of Pakistan's children.
                </div>
                {/* Graphs*/}
                <div className='flex flex-col w-4/5 mx-auto lato-16-blue mt-4' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <div className='flex flex-col w-auto h-auto items-center mx-auto mb-4 '>
                        <div className=' secular-20px-upper text-center mb-4'>FEMALE LITERACY RATE VS<br></br> MEN LITERACY RATE</div>
                        <div className='h-auto'><LineChartSmall /></div>
                    </div>
                    <div className='flex flex-col w-auto h-auto mx-auto items-center' data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        <div className=' secular-20px-upper text-center mb-4'>PAKISTAN'S EXPENDITURE ON<br></br> ARMY VS EDUCATION</div>
                        <div className='h-auto'><BarChartSmall /></div>
                    </div>
                </div>
                {/* Body Text*/}
                <div className='flex flex-row w-4/5 mx-auto items-center lato-16-blue mt-4' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    A donation website focused on education in Pakistan can play a crucial role in the challenges faced by the education sector in the country. By raising awareness about the disheartening reality of education in Pakistan, such a platform can mobilize much-needed funds to support initiatives aimed at improving the education system.
                </div>
                {/* Body Text*/}
                <div className='flex flex-row w-4/5 mx-auto items-center lato-16-blue mt-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    The website can serve as a hub for donors, connecting them with various initiatives and organizations working towards improving education in Pakistan. This will not only simplify the donation process but also provide a transparent and accountable platform for donors to track the impact of their contributions.
                </div>

                {/* How we are helping Heading*/}
                <div className='flex flex-row w-4/5 mx-auto bebas-25-blue mt-6 items-center' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <span className="mx-auto before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-700 relative inline-block">
                        <span className="mx-auto relative text-white">How we are helping</span>
                    </span>
                </div>
                {/* Body Text*/}
                <div className='flex flex-row w-4/5 mx-auto items-center lato-16-blue mt-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    The problems faced by Pakistan's education sector are complex and multifaceted. A website focused on education in Pakistan can play a vital role in addressing these issues by:
                </div>
                {/* Points*/}
                <div className='flex flex-col w-4/5 mx-auto items-center justify-between mt-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <div className='p-4 border border-dashed border-main h-auto w-auto mb-4 mx-auto'>
                        <div className='flex flex-col w-auto h-auto items-center mx-auto'>
                            <div className='w-24 mb-4'>
                                <Image className="w-full h-auto object-cover"
                                    src={awareness}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className='lato-16-blue'>
                                By highlighting the various challenges faced by Pakistan's education sector and the importance of education for the country's development, the website can help change public perception and encourage support for educational initiatives.
                            </div>
                        </div>
                    </div>
                    <div className='p-4 border border-dashed border-main h-auto w-auto mx-auto' data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        <div className='flex flex-col w-auto h-auto items-center my-auto mx-auto'>
                            <div className='w-28 mb-4 my-auto'>
                                <Image className="w-full h-auto object-cover"
                                    src={resources}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className='lato-16-blue my-auto'>
                                The website can serve as a platform to connect donors with credible organizations and projects working to improve education in Pakistan. By streamlining the donation process, the website can help mobilize much-needed resources to address the crisis.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-4/5 mx-auto items-center mt-4 mb-6' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <div className='p-4 border border-dashed border-main h-auto w-auto mx-auto mb-4'>
                        <div className='flex flex-col w-auto h-auto items-center mx-auto'>
                            <div className='w-24 mb-4'>
                                <Image className="w-full h-auto object-cover"
                                    src={transparency}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className='lato-16-blue'>
                                By providing a transparent platform for donations, the website can ensure that funds are directed towards effective initiatives and donors can track the impact of their contributions.
                            </div>
                        </div>
                    </div>
                    <div className='p-4 border border-dashed border-main h-auto w-auto mx-auto' data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        <div className='flex flex-col w-auto h-auto items-center mx-auto my-auto'>
                            <div className='w-24 mb-4 my-auto'>
                                <Image className="w-full h-auto object-cover"
                                    src={support}
                                    width={287}
                                    height={349}
                                    alt="cover"
                                />
                            </div>
                            <div className='lato-16-blue'>
                                The website can help identify and prioritize the needs of the most vulnerable and marginalized groups, such as girls, children with disabilities, and those living in remote or conflict-affected areas.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default insights