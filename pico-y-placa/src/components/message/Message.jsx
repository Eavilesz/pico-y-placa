import React from "react";

const Message = (props) => {
  return (
    <h2 className="text-yellow">
      Can you Drive?{" "}
      {props.isSubmitted && (
        <span className="fw-bolder">{props.canDrive ? "Yes!" : "No :("}</span>
      )}
    </h2>
  );
};
export default Message;
