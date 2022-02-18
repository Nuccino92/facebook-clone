import "./Nav.css";
import facebookIcon from "./facebook-icon.png";
import { AiOutlineSearch, AiFillCaretDown } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import { BsPersonSquare } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../redux/actions/user";

const Nav = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.userReducer);

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
        <Link to="/">
          <div
            style={
              location.pathname === "/"
                ? { boxShadow: "inset 0 -3px rgb(24, 119, 242)" }
                : { borderBottom: "none" }
            }
          >
            <IoMdHome
              style={
                location.pathname === "/"
                  ? { color: "rgb(24, 119, 242)" }
                  : null
              }
            />
          </div>
        </Link>
        <Link to={`/profile/${user._id}`} state={user}>
          <div
            style={
              location.pathname !== "/"
                ? { boxShadow: "inset 0 -3px rgb(24, 119, 242)" }
                : null
            }
          >
            <BsPersonSquare
              style={
                location.pathname !== "/"
                  ? { color: "rgb(24, 119, 242)" }
                  : null
              }
            />
          </div>
        </Link>
      </div>
      <div className="nav-right">
        <Link
          to={`/profile/${user._id}`}
          state={user}
          className="nav-right-profile-container"
        >
          <div>
            <img src={user.profile[0].profilePicture} alt="stop"></img>
            <div>{user.profile[0].firstName}</div>
          </div>
        </Link>
        <div
          onClick={handleMenu}
          id="down-arrow"
          className="down-arrow-container"
        >
          <AiFillCaretDown />
        </div>
        {/* --------------dropdown menu-------------- */}
        {profileMenu && (
          <div className="profile-menu">
            <div className="profile-menu-inner">
              <ul>
                <Link
                  to={`/profile/${user._id}`}
                  state={user}
                  onClick={() => setProfileMenu(false)}
                >
                  <li className="profile-menu-first">
                    <img
                      src={user.profile[0].profilePicture}
                      alt="Profile"
                    ></img>
                    <div>
                      {user.profile[0].firstName} {user.profile[0].lastName}
                      <p>See your profile</p>
                    </div>
                  </li>{" "}
                </Link>
                <div></div>
                <Link
                  to={`/friends/${user._id}`}
                  onClick={() => setProfileMenu(false)}
                >
                  <li className="profile-menu-second">
                    <div>
                      <FaUserFriends />
                    </div>
                    <p>View Friend Requests</p>
                  </li>
                </Link>

                <li
                  className="profile-menu-third"
                  onClick={() => {
                    setProfileMenu(false);
                    // logout user
                    dispatch(logOutUser());
                    navigate("/");
                  }}
                >
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
