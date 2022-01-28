import { useState } from "react";
import { useLocation } from "react-router-dom";
import LogInFooter from "./LogInFooter";

const LogInForm = () => {
  const location = useLocation();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return location.pathname === "/login" ? (
    <div className="LogInForm-container">
      <h1 className="LogIn-form-header">facebook</h1>

      <form className="LogIn-form" onSubmit={handleSubmit}>
        <div className="LogIn-form-header">Log in to Facebook</div>
        <input type="text" name="email" placeholder="Email adress"></input>
        <input type="password" name="password" placeholder="Password"></input>
        <button className="LogIn-submit-btn">Log In</button>
        <div className="guest-account-link">Use Guest Account</div>
        <div className="LogIn-form-break"></div>
        <button className="LogIn-register-btn">Create New Account</button>
      </form>
      <LogInFooter />
    </div>
  ) : (
    <form className="LogIn-form" onSubmit={handleSubmit}>
      <input type="text" name="email" placeholder="Email adress"></input>
      <input type="password" name="password" placeholder="Password"></input>
      <button className="LogIn-submit-btn">Log In</button>
      <div className="guest-account-link">Use Guest Account</div>
      <div className="LogIn-form-break"></div>
      <button className="LogIn-register-btn">Create New Account</button>
    </form>
  );
};

export default LogInForm;
