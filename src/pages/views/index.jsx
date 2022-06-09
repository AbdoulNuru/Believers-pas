import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import jwt from "jsonwebtoken";
import ResponsiveDrawer from "../../components/drawer/responsiveDrawer";

class Index extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    //const user = localStorage.getItem("ag-user-data");

    if (token) {
      const { exp } = jwt.decode(token);

      if (Date.now() >= exp * 1000) {
        return this.props.history.push("/");
      }
      //this.props.loginUserSuccess({ data: JSON.parse(user), token: token });
      return this.props.history.push("/home");
    } else {
      return this.props.history.push("/");
    }
  }
  render() {
    return (
      <div>
        <ResponsiveDrawer component={this.props.children} />
      </div>
    );
  }
}

export default withRouter(Index);
