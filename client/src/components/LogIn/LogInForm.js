import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const LogInForm = () => {
  const location = useLocation();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    console.log(userData);
    e.preventDefault();
  };

  return location.pathname === "/login" ? (
    <div className="LogInForm-container">
      <h1 className="LogIn-form-header">facebook</h1>

      <form className="LogIn-form" onSubmit={handleSubmit}>
        <div className="LogIn-form-header">Log in to Facebook</div>
        <input
          type="text"
          name="email"
          placeholder="Email adress"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        ></input>
        <button type="submit" className="LogIn-submit-btn">
          Log In
        </button>
        <div className="guest-account-link">Use Guest Account</div>
        <div className="LogIn-form-break"></div>
        <Link className="register-link" to="/register">
          <button className="LogIn-register-btn">Create New Account</button>
        </Link>
      </form>
      <Footer />
    </div>
  ) : (
    <form className="LogIn-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        placeholder="Email adress"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      ></input>
      <button className="LogIn-submit-btn">Log In</button>
      <div className="guest-account-link">Use Guest Account</div>
      <div className="LogIn-form-break"></div>
      <Link className="register-link" to="/register">
        <button className="LogIn-register-btn">Create New Account</button>
      </Link>
    </form>
  );
};

export default LogInForm;
