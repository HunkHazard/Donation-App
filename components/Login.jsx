

export const Login = () => {
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
                <img
                  src="/GraphicElements.svg"
                  alt="Graphic Elements"
                  className=" w-20 h-auto pb-2 pt-4"
                />
              </div>

              <h2 className="welcome pb-2">Welcome Back</h2>
              <p className="statement pb-4">
                Please enter your login details to sign in
              </p>
            </div>
            <h3 className="heading">Email</h3>
            <input
              placeholder="Enter your email"
              id="email"
              className="input"
            ></input>
            <h3 className="heading pt-2">Password</h3>
            <input
              placeholder="Enter your password"
              id="password"
              className="input"
            ></input>
            <a className="forgor pt-2">Forgot Password?</a>
            <button className="signin" onClick={login}>
              Sign in
            </button>
            <p className="statement pt-4 pb-4">
              Don't have an account? <a>Create Account</a>
            </p>
          </div>
        </div>
      </div>
    );
  
};

export default Login;
