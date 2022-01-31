import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
// import Register from "./Register";
const Login = () => {
  return (
    <>
      <div className="login">
        <div className="main-container">
          <h3>Login for admin</h3>
          <div className="login-center">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>

                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>

              <div className="login-button">
                <button type="submit">Login</button>
                <Link to="/">
                  <button>Back to home</button>
                </Link>
              </div>
            </form>
          </div>
          {/* <div className="login-center">
         
          <form>
          <p>Login </p>

            <label htmlhtmlFor="email">Email</label>
            <input type="email" placeholder="Import email...." name="email" required />

            <label htmlhtmlFor="password">Password</label>
            <input type="email" placeholder="Import password...." name="password" required />

           <div className="login-btn">
               <button type="submit">Login</button>
               <Link to="/"><button>Back to home</button></Link>
           </div>
smil
            
          </form>
        </div> */}
        </div>
      </div>

      {/* register */}

      {/* <Register/> */}
    
    </>
  );
};

export default Login;
