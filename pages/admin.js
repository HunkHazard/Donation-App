export const admin = () => {
  return (
    <div className="bigdiv">
      <div className="container">
        <div className="loginitems1 mt-2">
          <div>
            <div className=" flex justify-center">
              <img
                src="/GraphicElements.svg"
                alt="Graphic Elements"
                className=" h-25 pb-3"
              />
            </div>

            <h2 className="welcome pb-2">Welcome Back</h2>
            <p className="statement ">
              Please enter your login details to sign in.
            </p>
          </div>
          <h3 className="heading pb-1">Email</h3>
          <input placeholder="Enter your email" className="input mb-2"></input>
          <h3 className="heading pb-1">Password</h3>
          <input
            placeholder="Enter your password"
            className="input mb-1"
          ></input>
          <a className="forgor lato-14-blue">Forgot Password?</a>
          <button className="signin pb-1 pt-1 mb-3">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default admin;