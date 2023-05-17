import Image from "next/image";
import Logo from "../public/GraphicElements.svg";
import { useRouter } from "next/router"

export const signup = () => {
    const router = useRouter();

    function signup(event) {
        event.preventDefault();
        const payload = {
            FirstName: document.querySelector("#fname").value,
            LastName: document.querySelector("#lname").value,
            Email: document.querySelector("#email").value,
            Phone: document.querySelector("#phone").value,
            Password: document.querySelector("#password").value,
            City: document.querySelector("#city").value,
            Province: document.querySelector("#province").value,
        };
        console.log(payload);
        async function fetchRes(payload) {
            const res = await fetch("http://localhost:3000/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const parsedRes = await res.json();
            if (res.status == 200) {
                alert("Sign-Up Successful!!");
                router.push("/login");
            } else {
                const { message } = parsedRes;
                alert(message);
            }
            // window.location.href = "/login";
        }
        fetchRes(payload);
    }
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
                            <div><p className="heading pb-3 after:content-['*'] after:ml-0.5 after:text-red-500">First Name</p></div>
                            <input id="fname" placeholder="Enter your first name" style={{ color: "black" }} className="input"></input>
                        </div>
                        <div className="flex flex-col text-left ml-1">
                            <div><p className="heading pb-3 after:content-['*'] after:ml-0.5 after:text-red-500">Last Name</p></div>
                            <input id="lname" placeholder="Enter your last name" style={{ color: "black" }} className="input"></input>
                        </div>
                    </div>

                    <div className=" flex flex-col pb-5">
                        <div className="heading pb-3 after:content-['*'] after:ml-0.5 after:text-red-500">Email</div>
                        <input id="email" type="email" placeholder="Enter your email" style={{ color: "black" }} className="input disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-red-600
      focus:invalid:border-pink-500 focus:invalid:ring-red-500"></input>
                    </div>
                    <div className=" flex flex-col pb-5">
                        <div className="heading pb-3 after:content-['*'] after:ml-0.5 after:text-red-500">Password</div>
                        <input id="password" type="password" placeholder="Enter your password" style={{ color: "black" }} className="input"></input>
                    </div>
                    <div className=" flex flex-col pb-5">
                        <div className="heading pb-3 after:content-['*'] after:ml-0.5 after:text-red-500">Contact Number</div>
                        <input id="phone" placeholder="+92 3xx-xxxxxx" style={{ color: "black" }} className="input"></input>
                    </div>
                    <div className="flex flex-row">
                        <div className=" flex flex-col mr-1">
                            <div className="heading pb-3 after:content-['*'] after:ml-0.5 after:text-red-500">City</div>
                            <input id="city" placeholder="Enter your city" style={{ color: "black" }} className="input"></input>
                        </div>
                        <div className="flex flex-col ml-1">
                            <div className="heading pb-3 after:content-['*'] after:ml-0.5 after:text-red-500">Province</div>
                            <input id="province" placeholder="Enter your province" style={{ color: "black" }} className="input"></input>
                        </div>
                    </div>
                    <div className="signuprow pb-2 ">
                        <button className="signin hover:bg-pink-800 mb-4" onClick={signup}>Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default signup;