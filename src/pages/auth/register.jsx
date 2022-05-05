import React from "react";
import "./register.css";

const Register = () => {
  return (
    <>
      <div>
        <div className="form">
          <div className="head">
            <p className="title">Believers Perception Analytics System</p>
            <p className="sub_title">Please fill the form to Register</p>
            {/* <p className="sub_title2">{errors.globalError}</p> */}
          </div>
          <form>
            <ul>
              <li className="input_wrap">
                <label htmlFor="fullName" className="label">
                  Full Names
                </label>
                <div className="input_dev">
                  <input
                    type="text"
                    placeholder="enter your full names"
                    name="fullName"
                    className="input"
                    // value={data.fullName}
                    // onChange={this.onChange}
                  />
                </div>
                {/* {<p className={style.message}>{errors.fullName}</p>} */}
              </li>
              <li className="input_wrap">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <div className="input_dev">
                  <input
                    type="text"
                    placeholder="enter your email"
                    name="email"
                    className="input"
                    // value={data.email}
                    // onChange={this.onChange}
                  />
                </div>
                {/* {<p className={style.message}>{errors.email}</p>} */}
              </li>
              <li className="input_wrap">
                <label htmlFor="password" className="label">
                  Password
                </label>
                <div className="input_dev">
                  <input
                    type="password"
                    placeholder="secured password"
                    name="password"
                    className="input"
                    // value={data.password}
                    // onChange={this.onChange}
                  />
                </div>
                {/* {<p className={style.message}>{errors.password}</p>} */}
              </li>
              <div className="action">
                <button className="button">sign up</button>
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

export default Register;
