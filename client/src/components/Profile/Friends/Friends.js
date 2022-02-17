import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Friends.css";
import FriendsDropdown from "./FriendsDropdown/FriendsDropdown";

const Friends = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const { myProfile, viewedUser, friendsInfo } = useSelector(
    (state) => state.viewedUserReducer
  );

  const handleActiveDropdown = (index) => {
    setActiveDropdown(index);
  };

  return (
    <div className="Friends">
      <header>
        <h2>Friends</h2>
        {myProfile && (
          <Link to={`/friends/${viewedUser._id}`}>
            <div>Friend Requests</div>
          </Link>
        )}
      </header>
      <div className="Friends-list-container">
        {friendsInfo.map((user, index) => {
          const { profile } = user;
          return (
            <div key={index}>
              <div>
                <Link to={`/profile/${user._id}`}>
                  {" "}
                  <img src={profile[0].profilePicture} alt="Profile"></img>
                </Link>
                <span>
                  {profile[0].firstName} {profile[0].lastName}
                </span>
              </div>
              {!myProfile ? (
                <button>Add friend</button>
              ) : (
                <FriendsDropdown
                  index={index}
                  handleActiveDropdown={handleActiveDropdown}
                  activeDropdown={activeDropdown}
                />
              )}
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
};

export default Friends;
