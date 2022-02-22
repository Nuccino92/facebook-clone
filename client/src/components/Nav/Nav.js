import "./Nav.css";
import facebookIcon from "./facebook-icon.png";
import { AiOutlineSearch, AiFillCaretDown } from "react-icons/ai";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { BsPersonSquare } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../redux/actions/user";
import { getAllUsers } from "../../api/user";
import SearchResult from "./SearchResult/SearchResult";

const Nav = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const inputRef = useRef();

  const [profileMenu, setProfileMenu] = useState(false);
  const [listOfUsers, setListOfUsers] = useState([]);
  const [filteredData, setFitleredData] = useState([]);

  const [isMyInputFocused, setIsMyInputFocused] = useState(false);

  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    const getList = async () => {
      const res = await getAllUsers();
      setListOfUsers(res.data);
    };
    getList();
  }, []);

  const handleFilter = (e) => {
    const word = e.target.value;

    const newFilter = listOfUsers.filter((user) => {
      return (
        user.profile[0].firstName.toLowerCase().includes(word.toLowerCase()) ||
        user.profile[0].lastName.toLowerCase().includes(word.toLowerCase())
      );
    });

    word === "" ? setFitleredData([]) : setFitleredData(newFilter);
  };

  // set timeout before setIsMyInputFocused(false) lets user click links before VDOM is removed
  const handleBlur = () => {
    setTimeout(() => {
      setIsMyInputFocused(false);
    }, 100);
  };

  useEffect(() => {
    isMyInputFocused && inputRef.current.focus();
  }, [isMyInputFocused]);

  const handleMenu = () => {
    setProfileMenu(!profileMenu);
  };

  return (
    <div className="Nav">
      {isMyInputFocused ? (
        <div className="nav-left nav-left-active">
          <div>
            <div
              style={{ display: "flex", margin: "auto", paddingBottom: "7px" }}
            >
              <div className="nav-left-backarrow-container">
                <MdOutlineKeyboardBackspace size={24} color="grey" />
              </div>
              <div className="searchbar-container">
                <AiOutlineSearch />
                <input
                  ref={inputRef}
                  onBlur={handleBlur}
                  onFocus={() => setIsMyInputFocused(true)}
                  placeholder="Search Facebook"
                  type="text"
                  onChange={handleFilter}
                ></input>
              </div>
            </div>
            {isMyInputFocused && (
              <div className="SearchResult-container">
                {filteredData.length === 0 ? (
                  <div className="filtered-data-empty"> No results found</div>
                ) : (
                  filteredData.slice(0, 15).map((user, index) => {
                    return (
                      <Link to={`/profile/${user._id}`} key={index}>
                        <SearchResult user={user} />
                      </Link>
                    );
                  })
                )}
              </div>
            )}{" "}
          </div>
        </div>
      ) : (
        <div className="nav-left">
          <Link to="/">
            <img src={facebookIcon} alt="Facebook icon homepage button"></img>
          </Link>

          <div className="searchbar-container">
            <AiOutlineSearch />
            <input
              ref={inputRef}
              onBlur={handleBlur}
              onFocus={() => setIsMyInputFocused(true)}
              placeholder="Search Facebook"
              type="text"
              onChange={handleFilter}
            ></input>

            {isMyInputFocused && (
              <div className="SearchResult-container">
                {filteredData.slice(0, 15).map((user, index) => {
                  return (
                    <Link to={`/profile/${user._id}`} key={index}>
                      <SearchResult user={user} />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

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
