import "./Nav.css";
import facebookIcon from "./facebook-icon.png";
import { AiOutlineSearch, AiFillCaretDown } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import { BsPersonSquare } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [userData] = useState({
    firstname: "Anthony",
    lastname: "Nucci",
    picture:
      "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
  });

  const [profileMenu, setProfileMenu] = useState(false);

  const handleMenu = () => {
    setProfileMenu(!profileMenu);
  };

  return (
    <div className="Nav">
      <div className="nav-left">
        <Link to="/">
          <img src={facebookIcon} alt="Facebook icon homepage button"></img>
        </Link>

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
        <div
          onClick={handleMenu}
          id="down-arrow"
          className="down-arrow-container"
        >
          <AiFillCaretDown />
        </div>
        {profileMenu && (
          <div className="profile-menu">
            <div className="profile-menu-inner">
              <ul>
                <li className="profile-menu-first">
                  <img src={userData.picture} alt="Profile"></img>
                  <div>
                    {userData.firstname} {userData.lastname}
                    <p>See your profile</p>
                  </div>
                </li>
                <div></div>
                <li className="profile-menu-second">
                  <div>
                    <FaUserFriends />
                  </div>
                  <p>View Friend Requests</p>
                </li>
                <li className="profile-menu-third">
                  <div>
                    <GoSignOut />
                  </div>
                  <p>Log Out</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
