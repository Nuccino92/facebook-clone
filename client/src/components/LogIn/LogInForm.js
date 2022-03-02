import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logInUser } from "../../redux/actions/user";
import Footer from "../Footer/Footer";
import FormError from "../FormError/FormError";

const LogInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    errors: false,
    message: "",
    param: "",
    id: null,
  });

  const { message, param, id } = useSelector((state) => state.errorReducer);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    setError({
      errors: false,
      message: "",
      param: "",
      id: null,
    });
  };

  const handleGuestAccount = (e) => {
    // data for guest account
    const guestAccountData = {
      email: "guestaccount@gmail.com",
      password: "password123",
    };

    e.preventDefault();
    dispatch(logInUser(guestAccountData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logInUser(userData));
  };

  useEffect(() => {
    if (id === "LOGIN_FAIL") {
      setError({
        errors: true,
        message: message,
        param: param,
        id: id,
      });
    }
    if (id === "LOGIN_SUCCESS") {
      navigate("/");
    }
  }, [id, message, navigate, param]);

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
        {error.errors && (
          <FormError message={error.message} location={"login"} />
        )}
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
      {error.errors && <FormError message={error.message} location={"login"} />}
      <button className="LogIn-submit-btn">Log In</button>
      <div className="guest-account-link" onClick={handleGuestAccount}>
        Use Guest Account
      </div>
      <div className="LogIn-form-break"></div>
      <Link className="register-link" to="/register">
        <button className="LogIn-register-btn">Create New Account</button>
      </Link>
    </form>
  );
};

export default LogInForm;
