import React from "react";
import "./register.css";

const Register = () => {
  return (
    <>
      <div>
        <div className="form1">
          <div className="head1">
            <p className="title1">Believers Perception Analytics System</p>
            <p className="sub_title1">Please fill the form to Register</p>
            {/* <p className="sub_title2">{errors.globalError}</p> */}
          </div>
          <form>
            <ul>
              <li className="input_wrap1">
                <label htmlFor="firstName" className="label1">
                  First Name
                </label>
                <div className="input_dev1">
                  <input
                    type="text"
                    placeholder="enter your first name"
                    name="firstName"
                    className="input1"
                    // value={data.fullName}
                    // onChange={this.onChange}
                  />
                </div>
                {/* {<p className={style.message}>{errors.fullName}</p>} */}
              </li>
              <li className="input_wrap1">
                <label htmlFor="lastName" className="label1">
                  Last Name
                </label>
                <div className="input_dev1">
                  <input
                    type="text"
                    placeholder="enter your last name"
                    name="lastName"
                    className="input1"
                    // value={data.fullName}
                    // onChange={this.onChange}
                  />
                </div>
                {/* {<p className={style.message}>{errors.fullName}</p>} */}
              </li>
              <li className="input_wrap1">
                <label htmlFor="gender" className="label1">
                  Gender
                </label>
                <div className="input_dev1">
                  <select
                    name="gender"
                    id="gender"
                    className="input1"
                    // value={data.fullName}
                    // onChange={this.onChange}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                {/* {<p className={style.message}>{errors.fullName}</p>} */}
              </li>
              <li className="input_wrap1">
                <label htmlFor="dob" className="label1">
                  Date of Birth
                </label>
                <div className="input_dev1">
                  <input
                    type="date"
                    id="dob"
                    className="input1"
                    name="dob"
                    // min="2018-01-01"
                    // max="2018-12-31"
                  />
                </div>
                {/* {<p className={style.message}>{errors.fullName}</p>} */}
              </li>
              <li className="input_wrap1">
                <label htmlFor="email" className="label1">
                  Email
                </label>
                <div className="input_dev1">
                  <input
                    type="text"
                    placeholder="enter your email"
                    name="email"
                    className="input1"
                    // value={data.email}
                    // onChange={this.onChange}
                  />
                </div>
                {/* {<p className={style.message}>{errors.email}</p>} */}
              </li>
              <li className="input_wrap1">
                <label htmlFor="password" className="label1">
                  Password
                </label>
                <div className="input_dev1">
                  <input
                    type="password"
                    placeholder="secured password"
                    name="password"
                    className="input1"
                    // value={data.password}
                    // onChange={this.onChange}
                  />
                </div>
                {/* {<p className={style.message}>{errors.password}</p>} */}
              </li>
              <div className="action1">
                <button className="button1">sign up</button>
              </div>
            </ul>
          </form>
        </div>
        <div className="one1" />
        <div className="two1" />
        <div className="three1" />
      </div>
    </>
  );
};

export default Register;
