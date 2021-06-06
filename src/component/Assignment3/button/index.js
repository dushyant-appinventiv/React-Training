import React from "react";
import "./button.scss";

function Button(props) {
  return (
    <button
      className={props.color}
      style={{ width: props.width, height: props.height }}
      type="button"
    >
      {props.content}
    </button>
  );
}

export default Button;
