import "./Nav.css";
import facebookIcon from "./facebook-icon.png";
import { AiOutlineSearch, AiFillCaretDown } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import { BsPersonSquare } from "react-icons/bs";
import { useState } from "react";

const Nav = () => {
  const [userData] = useState({
    firstname: "Anthony",
    picture:
      "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
  });

  return (
    <div className="Nav">
      <div className="nav-left">
        <img src={facebookIcon} alt="Facebook icon homepage button"></img>
        <div className="searchbar-container">
          <AiOutlineSearch />
          <input placeholder="Search Facebook" type="text"></input>
        </div>
      </div>
      <div className="nav-middle">
        <div>
          <IoMdHome />
        </div>
        <div>
          <BsPersonSquare />
        </div>
      </div>
      <div className="nav-right">
        <div className="nav-right-profile-container">
          <img src={userData.picture} alt="stop"></img>
          <div>{userData.firstname}</div>
        </div>{" "}
        <div className="down-arrow-container">
          <AiFillCaretDown />
        </div>
      </div>
    </div>
  );
};

export default Nav;
