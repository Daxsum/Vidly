import React, { Component } from "react";
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
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              name="username"
              onChange={this.handleChange}
              value={this.state.account.username}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input
              name="password"
              value={this.state.account.password}
              onChange={this.handleChange}
              id="password"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
