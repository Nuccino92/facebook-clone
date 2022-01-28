import "./LogIn.css";
import React from "react";
import LogInForm from "./LogInForm";
import LogInFooter from "./LogInFooter";

const LogIn = () => {
  return (
    <div className="LogIn">
      {" "}
      <div className="LogIn-left">
        <h1>facebook</h1>
        <p>
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="LogIn-right">
        <LogInForm />
      </div>{" "}
      <LogInFooter />
    </div>
  );
};

export default LogIn;
