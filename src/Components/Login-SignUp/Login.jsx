import React from "react";
import { ReactComponent as Olx } from "../../Images/logo2.svg";

function Login() {
  return (
    <>
      <section className="w-100 mx-auto  py-3 px-2">
        <div className="container ">
          <Olx fill="#3A77FF" />
          <div className="loginTitle p-2 text-center">
            <h2 className="text-center fw-bold">LOGIN</h2>

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
          </div>
          <a href="#" className="forgotPassowrd text-decoration-none grayShade">
            Forgot Passowrd?
          </a>
          <button className="btn btn-md btn-primary d-block mx-auto my-3 w-100">
            LOGIN
          </button>
          <div className="loginFooter ">
            Don't have an account? &nbsp;
            <button
              className="grayShade text-decoration-none"
              type="button"
              data-bs-toggle="modal2"
              data-bs-target="#exampleModal2"
            >
              Sign Up
            </button>
            <div
              class="modal fade"
              id="exampleModal2"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel2"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal2"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <Login />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
