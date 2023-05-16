import Signupmodal from "./signupmodal";
export const login = () => {
    function login(event) {
        event.preventDefault(); // prevent the default form submission behavior (page refreshs if not used)

        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        const payload = {
            email: email,
            password: password,
        };

        const fetchData = async () => {
            const response = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ payload }),
            });

            const data = await response.json();

            // if the login is successful, store the token in the local storage
            // and redirect the user to the donors page
            if (data.token) {
                localStorage.setItem("token", data.token);
                window.location.href = "/userdashboard";
            }

            console.log(data);
        };

        fetchData();
    }
    return (
        <div className="bigdiv">
            <div className="container">
                <div className="loginitems1">
                    <div>
                        <div className=" flex justify-center">
                            <img src="/GraphicElements.svg" alt="Graphic Elements" className=" w-20 h-auto pb-2 pt-4" />
                        </div>

                        <h2 className="welcome pb-2">Welcome Back</h2>
                        <p className="statement pb-4">Please enter your login details to sign in</p>
                    </div>
                    <h3 className="heading after:content-['*'] after:ml-0.5 after:text-red-500">Email</h3>
                    <input id="email" placeholder="Enter your email" type="email" style={{ color: "black" }} className="input disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"></input>
                    <h3 className="heading pt-2 after:content-['*'] after:ml-0.5 after:text-red-500">Password</h3>
                    <input id="password" placeholder="Enter your password" type="password" style={{ color: "black" }} className="input"></input>
                    <a className="forgor pt-2">Forgot Password?</a>
                    <button className="signin mb-4 hover:bg-pink-800" onClick={login}>Sign in</button>
                </div>
            </div>
        </div>
    )
}

export default login;