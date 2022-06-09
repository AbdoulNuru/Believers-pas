import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import DashboardRoot from "../pages/views";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Home from "../components/home";
import AddChurch from "../pages/Add church/newChurch";
import AddChurchLeader from "../pages/add leader/newChurchLeader";
import AddChurchAdmin from "../pages/add admin/newChurchAdmin";
import ViewUsers from "../pages/tableViews/adminUserView";

axios.defaults.baseURL = "http://localhost:3600";

export default class index extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />

        <DashboardRoot>
          <Route
            component={({ match }) => (
              <div>
                <Route path="/home" exact component={Home} />
                <Route path="/add-church" exact component={AddChurch} />
                <Route
                  path="/add-church-leader"
                  exact
                  component={AddChurchLeader}
                />
                <Route
                  path="/add-church-admin"
                  exact
                  component={AddChurchAdmin}
                />
                <Route path="/view-users" exact component={ViewUsers} />
              </div>
            )}
          />
        </DashboardRoot>
      </Switch>
    );
  }
}
