import React from "react";
import { ReactComponent as Olx } from "../../Images/logo2.svg";
import Login from "./Login";

function SignUp() {
  return (
    <>
      <section className="w-50 mx-auto  py-3 px-2">
        <div className="container ">
          <Olx fill="#3A77FF" />
          <div className="loginTitle p-2 text-center">
            <h2 className="text-center fw-bold">SIGN UP</h2>

            <p className="">Please enter your email and password!</p>
          </div>
          <div className="loginInputs p-2 row gy-2">
            <div className="text-center">
              <input
                className="w-100 px-3 py-1"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="text-center">
              <input
                className="w-100 px-3 py-1"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="text-center">
              <input
                className="w-100 px-3 py-1"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <button className="btn btn-md btn-primary d-block mx-auto my-3 w-100">
            SIGN UP
          </button>
          <div className="loginFooter ">
            Already have an account? &nbsp;
            <a className="grayShade text-decoration-none" href="#">
              Login
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
