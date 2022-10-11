import react from "react";
import Form from "./comm/form";
import Joi from "joi-browser";
class Register extends Form {
  state = { data: { username: {}, password: {}, phone: {} }, errors: {} };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
    phone: Joi.string().required().label("Phone"),
  };
  render() {
    return (
      <div>
        {this.renderInput("username", "Username")}
        {this.renderInput("password", "Password", "password")}
        {this.renderInput("phone", "Phone")}
        {this.renderButton("Login")}
      </div>
    );
  }
}

export default Register;
