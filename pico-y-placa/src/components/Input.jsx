import React from "react";

const Input = (props) => {
  return (
    <input
      type={props.type ? props.type : "number"}
      name={props.name}
      className="form-control"
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};
export default Input;
