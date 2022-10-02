import React, { Component } from "react";
import Input from "./comm/input";
class LoginForm extends Component {
  state = { account: { username: "", password: "" } };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <div className="container">
        <h1>LogIn</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            onChange={this.handleChange}
            name="username"
            value={this.state.account.username}
            label="Username"
          />
          <Input
            onChange={this.handleChange}
            name="password"
            value={this.state.account.password}
            label="Password"
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
