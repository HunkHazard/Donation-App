import Image from "next/image";
import Logo from "../public/GraphicElements.svg";

export const signup = () => {
    return (
        <div className="bigdiv">
            <div className="container1">
                <div className="loginitems">
                    <div className=" flex flex-row justify-between mb-2">
                        <div className=" my-auto">
                            <p className="welcome">Sign up!</p>
                        </div>
                        <div>
                            <Image className="w-16 h-auto object-cover"
                                src={Logo}
                                width={287}
                                height={349}
                                alt="cover"
                            />
                        </div>
                    </div>
                    <div className=" statement1 pb-1 lato-16-blue">Create an account and start saving lives!</div>
                    <div className=" flex flex-row pb-5">
                        <div className=" flex flex-col text-left mr-1">
                            <div><p className="heading pb-3">First Name</p></div>
                            <input placeholder="Enter your first name" className="input"></input>
                        </div>
                        <div className="flex flex-col text-left ml-1">
                            <div><p className="heading pb-3">Last Name</p></div>
                            <input placeholder="Enter your last name" className="input"></input>
                        </div>
                    </div>

                    <div className=" flex flex-col pb-5">
                        <div className="heading pb-3">Email</div>
                        <input placeholder="Enter your email" className="input"></input>
                    </div>
                    <div className=" flex flex-col pb-5">
                        <div className="heading pb-3">Password</div>
                        <input placeholder="Enter your password" className="input"></input>
                    </div>
                    <div className=" flex flex-col pb-5">
                        <div className="heading pb-3">Contact Number</div>
                        <input placeholder="+92 3xx-xxxxxx" className="input"></input>
                    </div>
                    <div className="flex flex-row">
                        <div className=" flex flex-col mr-1">
                            <div className="heading pb-3 ">City</div>
                            <input placeholder="Enter your city" className="input"></input>
                        </div>
                        <div className="flex flex-col ml-1">
                            <div className="heading pb-3">Province</div>
                            <input placeholder="Enter your province" className="input"></input>
                        </div>
                    </div>
                    <div className="signuprow pb-2 ">
                        <button className="signin hover:bg-pink-800">Sign up</button>
                    </div>
                    <div className="statement mx-auto pb-4">Already have an account? <a>Log in</a></div>

                </div>
            </div>
        </div>
    )
}

export default signup;