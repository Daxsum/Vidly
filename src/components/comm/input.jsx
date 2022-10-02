import React from "react";
const Input = ({ name, value, onChange, label }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        onChange={onChange}
        value={value}
        id={name}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Input;
