import React, { useState } from "react";

const NewChurchAdmin = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h1>New Church Admin</h1>
      <div
        style={{
          width: "569px",
          height: "auto",
          marginLeft: "auto",
          marginRight: "auto",
          //   marginTop: "1vh",
        }}
      >
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
                  name="fname"
                  className="input1"
                  // value={data.fullName}
                  onChange={(e) => setFname(e.target.value)}
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
                  name="lname"
                  className="input1"
                  // value={data.fullName}
                  onChange={(e) => setLname(e.target.value)}
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
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
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
                  onChange={(e) => setDob(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* {<p className={style.message}>{errors.password}</p>} */}
            </li>
            <div className="action1">
              <button className="button1" /*onClick={(e) => onSubmit(e)}*/>
                Add Leader
              </button>
            </div>
          </ul>
        </form>
      </div>
    </>
  );
};

export default NewChurchAdmin;
