import React, { Component } from "react";
import ResponsiveDrawer from "../../components/drawer/responsiveDrawer";
// import { decode } from "../../utils/jwtToken";

class Index extends Component {
  //   componentDidMount() {
  //     const token = localStorage.getItem("token");
  //     const user = localStorage.getItem("ag-user-data");

  //     if (token) {
  //       const { exp, email } = decode(token);
  //       console.log(email);
  //       if (Date.now() >= exp * 1000) {
  //         return this.props.history.push("/");
  //       }
  //       this.props.loginUserSuccess({ data: JSON.parse(user), token: token });
  //     } else {
  //       return this.props.history.push("/");
  //     }
  //   }
  render() {
    return (
      <div>
        <ResponsiveDrawer component={this.props.children} />
      </div>
    );
  }
}

export default Index;
