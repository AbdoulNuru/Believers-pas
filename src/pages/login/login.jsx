import React, { useState } from "react";
import { BrowserRouter, Link, useHistory } from "react-router-dom";
import axios from "axios";
import jwt from "jsonwebtoken";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "./login.css";
import validate from "../../utils/validate.login";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [backendError, setBackendError] = useState("");

  let history = useHistory();

  const onSubmit = async (e) => {
      e.preventDefault();

      try {
        const errors = validate(email, password);
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
          const res = await axios.post("/auth/signin", {
            email,
            password,
          });

          const payload = jwt.decode(res.data.token);

          localStorage.setItem("token", res.data.token);
          localStorage.setItem("ag-user-data", JSON.stringify(payload));

          history.push("/home");
        }
        // }
      } catch (error) {
        setBackendError(error.response.data.message);
        setOpen(true);
      }
    },
    handleClose = () => {
      setOpen(false);
    };

  return (
    <>
      <div>
        <div className="form">
          <div className="head">
            <p className="title">Believers Perception Analytics System</p>
            <p className="sub_title">Please fill the form to Login</p>
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
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {errors.emailErrorStatus === true ? (
                  <p className="message" aria-label="emailError">
                    {errors.email}
                  </p>
                ) : errors.emailErrorStatus2 === true ? (
                  <p className="message" aria-label="emailError">
                    {errors.invalid}
                  </p>
                ) : (
                  ""
                )}
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
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {errors.passwordErrorStatus === true ? (
                  <p className="message" aria-label="passwordError">
                    {errors.password}
                  </p>
                ) : (
                  ""
                )}
              </li>
              <div className="action">
                <BrowserRouter>
                  <Link to="/register" className="link">
                    Have no account??
                  </Link>
                </BrowserRouter>
                <button
                  className="button"
                  aria-label="submit"
                  onClick={(e) => onSubmit(e)}
                >
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

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={10000}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">{backendError}</span>}
        action={[
          <IconButton
            key="close"
            color="inherit"
            onClick={() => setOpen(false)}
          >
            <CloseIcon aria-label="Close" />
          </IconButton>,
        ]}
      />
    </>
  );
};

export default Login;
