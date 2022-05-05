import React, { Component } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/auth/login";

axios.defaults.baseURL = "http://localhost:3700";

export default class index extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
      </Switch>
    );
  }
}
