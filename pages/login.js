export const login = () =>
{
    return(
        <div className="bigdiv">
            <div className="container">
                <div className="loginitems1">
                    <div>
                        <div className=" flex justify-center">
                            <img src="/GraphicElements.svg" alt="Graphic Elements" className=" h-50 pb-6" />
                        </div>
                        
                        <h2 className="welcome pb-3">Welcome Back</h2>
                        <p className="statement">Please enter your login details to sign in.</p>
                    </div>
                    <h3 className="heading">Email</h3>
                    <input placeholder="Enter your email" className="input"></input>
                    <h3 className="heading">Password</h3>
                    <input placeholder="Enter your password" className="input"></input>
                    <a className="forgor">Forgot Password?</a>
                    <button className="signin">Sign in</button>
                    <p className="statement">Don't have an account? <a>Create Account</a></p>
                </div>
            </div>
        </div>
    )
}

export default login;