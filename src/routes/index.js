import React, { Component } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import DashboardRoot from "../pages/views";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Home from "../components/home";

axios.defaults.baseURL = "http://localhost:3700";

export default class index extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />

        <DashboardRoot>
          <Route
            component={({ match }) => (
              <div>
                <Route path="/home" exact component={Home} />
              </div>
            )}
          />
        </DashboardRoot>
      </Switch>
    );
  }
}
