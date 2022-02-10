import "./Register.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/actions/user";

const Register = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    bio: "",
    birthday: "",
    gender: "",
  });

  // for the custom input to appear
  const [currentGender, setCurrentGender] = useState(false);

  // seving each selected date into state to convert for user data
  const [birthdayData, setBirthdayData] = useState({
    month: "01",
    day: "1",
    year: "2022",
  });

  // handles changes, also if radio btn set gender to a value to conditional render in form
  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "radio") setCurrentGender(value);

    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  //handles birthday state
  const handleBirthday = (e) => {
    const { name, value } = e.target;
    setBirthdayData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // everytime birthday state is updated, setUserData birthday to new date w/ those values
  useEffect(() => {
    setUserData((prev) => {
      return {
        ...prev,
        birthday: new Date(
          `${birthdayData.month} ${birthdayData.day} ${birthdayData.year}`
        ).toDateString(),
      };
    });
  }, [birthdayData]);

  // set birthday on mount to match selects/avoid using blank selects on each
  useEffect(() => {
    setUserData((prev) => {
      return {
        ...prev,
        birthday: new Date(`1-1-${new Date().getFullYear()}`),
      };
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(userData));
  };

  return (
    <div className="Register">
      <h1>facebook</h1>
      <div className="Register-form-container">
        <h3>Create a new account</h3>
        <p>It's quick and easy.</p>
        <form className="Register-form" onSubmit={handleSubmit}>
          <div className="Register-form-name-container">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              onChange={handleChange}
            ></input>
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              onChange={handleChange}
            ></input>
          </div>
          <input
            type="text"
            name="email"
            placeholder="Email adress"
            onChange={handleChange}
          ></input>
          <input
            type="password"
            name="password"
            placeholder="New password"
            onChange={handleChange}
          ></input>
          <div className="Register-form-birthday-container">
            <label htmlFor="birthday">Birthday</label>
            <div className="birthday-select-container">
              <select name="month" onChange={handleBirthday}>
                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">Mar</option>
                <option value="4">Apr</option>
                <option value="5">May</option>
                <option value="6">Jun</option>
                <option value="7">Jul</option>
                <option value="8">Aug</option>
                <option value="9">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </select>
              <select name="day" onChange={handleBirthday}>
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
                <option value={"4"}>4</option>
                <option value={"5"}>5</option>
                <option value={"6"}>6</option>
                <option value={"7"}>7</option>
                <option value={"8"}>8</option>
                <option value={"9"}>9</option>
                <option value={"10"}>10</option>
                <option value={"11"}>11</option>
                <option value={"12"}>12</option>
                <option value={"13"}>13</option>
                <option value={"14"}>14</option>
                <option value={"15"}>15</option>
                <option value={"16"}>16</option>
                <option value={"17"}>17</option>
                <option value={"18"}>18</option>
                <option value={"19"}>19</option>
                <option value={"20"}>20</option>
                <option value={"21"}>21</option>
                <option value={"22"}>22</option>
                <option value={"23"}>23</option>
                <option value={"24"}>24</option>
                <option value={"25"}>25</option>
                <option value={"26"}>26</option>
                <option value={"27"}>27</option>
                <option value={"28"}>28</option>
                <option value={"29"}>29</option>
                <option value={"30"}>30</option>
                <option value={"31"}>31</option>
              </select>
              <select name="year" onChange={handleBirthday}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
                <option value="1969">1969</option>
                <option value="1968">1968</option>
                <option value="1967">1967</option>
                <option value="1966">1966</option>
                <option value="1965">1965</option>
                <option value="1964">1964</option>
                <option value="1963">1963</option>
                <option value="1962">1962</option>
                <option value="1961">1961</option>
                <option value="1960">1960</option>
                <option value="1959">1959</option>
                <option value="1958">1958</option>
                <option value="1957">1957</option>
                <option value="1956">1956</option>
                <option value="1955">1955</option>
                <option value="1954">1954</option>
                <option value="1953">1953</option>
                <option value="1952">1952</option>
                <option value="1951">1951</option>
                <option value="1950">1950</option>
                <option value="1949">1949</option>
                <option value="1948">1948</option>
                <option value="1947">1947</option>
                <option value="1946">1946</option>
                <option value="1945">1945</option>
                <option value="1944">1944</option>
                <option value="1943">1943</option>
                <option value="1942">1942</option>
                <option value="1941">1941</option>
                <option value="1940">1940</option>
              </select>
            </div>
          </div>
          <div className="gender-container">
            <label htmlFor="gender">Gender</label>
            <div className="gender-select-container">
              <div>
                <label htmlFor="female">Female</label>
                <input
                  type="radio"
                  value="female"
                  id="female"
                  name="gender"
                  onChange={handleChange}
                  checked={userData.gender === "female"}
                />
              </div>
              <div>
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  value="male"
                  id="male"
                  name="gender"
                  onChange={handleChange}
                  checked={userData.gender === "male"}
                />
              </div>
              <div>
                <label htmlFor="custom">Custom</label>
                <input
                  type="radio"
                  value="custom"
                  id="custom"
                  name="gender"
                  onChange={handleChange}
                  checked={userData.gender === "custom"}
                />
              </div>
            </div>
            {currentGender === "custom" && (
              <input
                className="custom-gender"
                type="text"
                name="gender"
                placeholder="Gender (optional)"
                onChange={handleChange}
              ></input>
            )}
          </div>
          <button
            className="register-submit-btn"
            onClick={(e) => handleSubmit(e)}
          >
            Sign Up
          </button>
          <Link className="already-have-account" to="/login">
            <div>Already have an account?</div>
          </Link>
        </form>{" "}
      </div>
      <Footer />
    </div>
  );
};

export default Register;
