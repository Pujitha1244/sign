import React from "react";
import SignUpForm from "./SignUpForm";
import SignUpLeft from "./SignUpLeft";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="SignUp">
      <>
        <SignUpLeft className="left" />
      </>
      <>
        <SignUpForm />
      </>
    </div>
  );
}

export default SignUp;
