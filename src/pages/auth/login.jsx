import React, { useState, useeffect } from "react";
import "./login.css";

const login = () => {
  return (
    <>
      <div>
        <div className="form">
          <div className="head">
            <p className="title">L.M.S - Sign in</p>
            <p className="sub_title">Please fill the form</p>
          </div>
          <form>
            <ul>
              <li className="input_wrap">
                <label htmlFor="email" className="label">
                  Email address
                </label>
                <div className="input_dev">
                  <input
                    type="text"
                    placeholder="Enter email"
                    aria-label="email"
                    name="email"
                    className="input"
                    // value={this.state.email}
                    // onChange={(e) => this.change(e)}
                  />
                </div>
                <p className="message" aria-label="emailError">
                  {/* {this.state.emailError} */}
                </p>
              </li>
              <li className="input_wrap">
                <label htmlFor="email" className="label">
                  Password
                </label>
                <div className="input_dev">
                  <input
                    type="password"
                    name="password"
                    aria-label="password"
                    placeholder="Enter password"
                    className="input"
                    // value={this.state.password}
                    // onChange={(e) => this.change(e)}
                  />
                </div>
                <p className="message" aria-label="passwordError">
                  {/* {this.state.passwordError} */}
                </p>
              </li>
              <div className="action">
                <BrowserRouter>
                  <Link to="/signup" className="link">
                    Have no account??
                  </Link>
                </BrowserRouter>
                <button className="button" aria-label="submit">
                  sign in
                </button>
              </div>
            </ul>
          </form>
        </div>
        <div className="one" />
        <div className="two" />
        <div className="three" />
      </div>
    </>
  );
};

export default login;
