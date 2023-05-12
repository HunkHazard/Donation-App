import login from "./login";

export const signup = () => {
  return (
    <div className="bigdiv">
        <div className="container1">
            <div className="loginitems">
                <div className="signuprow">
                    <p className="welcome">Sign up</p>
                    <img src="/GraphicElements.svg" alt="Graphic Elements" className="graphic1" />
                </div>
                <p className="statement flex align">Create an account and start saving lives!</p>
                <div className="signupcolumn">
                    <div className="signuprow">
                        <div><p className="heading">First Name</p></div>
                        <div><p className="heading">Last Name</p></div>
                        
                    </div>
                    <div className="signuprow">
                        <input placeholder="Enter your first name" className="input1"></input>
                        <input placeholder="Enter your last name" className="input1"></input>
                    </div>
                </div>

                <p className="heading">Email</p>
                <div className="signuprow">
                    <input placeholder="Enter your email" className="input"></input>
                </div>
                
                <p className="heading">Password</p>
                <div className="signuprow">
                    <input placeholder="Enter your password" className="input"></input>
                </div>
                <p className="heading">Contact Number</p>
                <div className="signuprow">
                    <input placeholder="+92 3xx-xxxxxx" className="input"></input>
                </div>
                <div className="signupcolumn">
                    <div className="signuprow">
                        <p className="heading">City</p>
                        <p className="heading">Province</p>
                    </div>
                    <div className="signuprow">
                        <input placeholder="Enter your city" className="input1"></input>
                        <input placeholder="Enter your province" className="input1"></input>
                    </div>
                </div>
                <div className="signuprow">
                    <button className="signin">Sign up</button>
                </div>
                <p className="statement">Already have an account?<a>Log in</a></p>
            </div>
        </div>
    </div>
  )
 }

export default signup;