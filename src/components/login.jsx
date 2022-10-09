import Joi from "joi-browser";
import React, { Component } from "react";
import Input from "./comm/input";
class LoginForm extends Component {
  state = { account: { username: "", password: "" }, errors: {} };
  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };

  validate = () => {
    const reuslt = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });
    console.log(reuslt);
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "") {
      errors.username = "username is reqired";
    }
    if (account.password.trim() === "") {
      errors.password = "Password is reqired";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return;
    //call a surver
    console.log("submitted");
  };
  validareProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "username is required";
    }
    if (name === "password") {
      if (value.trim() === "") return "password is required";
    }
  };
  handleChange = (e) => {
    const errors = { ...this.state.errors };
    const errorMassage = this.validareProperty(e.currentTarget);
    if (errorMassage) errors[e.currentTarget.name] = errorMassage;
    else delete errors[e.currentTarget.name];

    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account, errors });
  };

  render() {
    const { errors, account } = this.state;
    return (
      <div className="container">
        <h1>LogIn</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            onChange={this.handleChange}
            name="username"
            value={account.username}
            label="Username"
            error={errors.username}
          />
          <Input
            onChange={this.handleChange}
            name="password"
            value={account.password}
            label="Password"
            error={errors.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
