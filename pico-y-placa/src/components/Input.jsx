import React from "react";

const Input = (props) => {
  return (
    <input
      type={props.type ? props.type : "number"}
      id={props.id}
      className="form-control"
    />
  );
};
export default Input;
