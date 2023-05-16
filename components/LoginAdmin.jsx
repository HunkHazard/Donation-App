export const Admin = () => {
    function login(event) {
        event.preventDefault(); // prevent the default form submission behavior (page refreshs if not used)
    
        const email = document.querySelector("#adminemail").value;
        const password = document.querySelector("#adminpass").value;
    
        const payload = {
          email: email,
          password: password,
        };
    
        const fetchData = async () => {
          const response = await fetch("http://localhost:3000/api/adminlogin", {
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
            localStorage.setItem("admintoken", data.token);
            window.location.href = "/empdashboard";
          }
    
          console.log(data);
        };
    
        fetchData();
      }
      
    
      
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
            <input placeholder="Enter your email" id="adminemail" className="input mb-2"></input>
            <h3 className="heading pb-1">Password</h3>
            <input
              placeholder="Enter your password"
              id="adminpass"
              className="input mb-1"
            ></input>
            <a className="forgor lato-14-blue">Forgot Password?</a>
            <button className="signin pb-1 pt-1 mb-3" onClick={login} >Sign in</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Admin;