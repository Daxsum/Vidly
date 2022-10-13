import React from "react";
import Form from "./comm/form";
import Joi from "joi-browser";
class Register extends Form {
  state = { data: { username: "", password: "", phone: "" }, errors: {} };
  schema = {
    username: Joi.string().email().required().label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    phone: Joi.string().required().label("Phone"),
  };
  // doSubmit = () => {
  //   //call server
  //   console.log("submited");
  // };
  doSubmit = () => {
    //call a surver
    console.log("submitted");
  };
  render() {
    return (
      <div>
        <h1>SignUp</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("phone", "Phone")}
          {this.renderButton("SignUp")}
        </form>
      </div>
    );
  }
}

export default Register;
