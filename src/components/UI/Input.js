import React from "react";
import "./Input.css";
function Input(props) {
  return (
    <div className="input">
      <input
        placeholder={props.placeholder}
        value={props.values}
        type={props.type}
        {...props.input}
        className="input__main"
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
