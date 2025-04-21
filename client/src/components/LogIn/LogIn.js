import "./LogIn.css";
import React from "react";
import LogInForm from "./LogInForm";
import Footer from "../Footer/Footer";

const LogIn = () => {
  return (
    <div className="LogIn">
      {" "}
      <div className="LogIn-left">
        <h1>SocialConnect</h1>
        <p>This is a mock website made for educational purposes.</p>
      </div>
      <div className="LogIn-right">
        <LogInForm />
      </div>{" "}
      <Footer />
    </div>
  );
};

export default LogIn;
