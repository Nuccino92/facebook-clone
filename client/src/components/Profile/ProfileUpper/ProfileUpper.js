import "./ProfileUpper.css";
import editProfilePicture from "./edit-profile.png";
import messageButtonPicture from "./message-button.png";
import profileFriendsPicture from "./profile-friends-btn.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileUpper = ({ selectedTab, setSelectedTab }) => {
  const { myProfile, viewedUser } = useSelector(
    (state) => state.viewedUserReducer
  );

  return (
    <div className="ProfileUpper">
      {/* coverPhoto container */}
      <div className="ProfileUpper-first">
        {viewedUser.profile[0].coverPhoto && (
          <img src={viewedUser.profile[0].coverPhoto} alt="Profile cover"></img>
        )}
      </div>
      {/* profile picture,  name/friends & buttons container */}
      <div className="ProfileUpper-second">
        <div className="ProfileUpper-second-left">
          {/* profile image container */}
          <div className="ProfileUpper-second-left-img-container">
            <img src={viewedUser.profile[0].profilePicture} alt="Profile"></img>
          </div>
          {/* name/friends container */}
          <div className="ProfileUpper-second-left-name-container">
            <h1>
              {viewedUser.profile[0].firstName} {viewedUser.profile[0].lastName}
            </h1>
            <Link to={`/profile/${viewedUser._id}/friends`}>
              <p>
                {viewedUser.friends.length}&nbsp;
                {viewedUser.friends.length === 1 ? "Friend" : "Friends"}
              </p>{" "}
            </Link>
          </div>
        </div>
        {/* buttons to the right of name */}
        <div className="ProfileUpper-second-right">
          {/* display certain buttons depending on if viewedUsers profile or not */}
          {myProfile ? (
            <div className="edit-profile-btn-container">
              <img src={editProfilePicture} alt="pencil"></img>
              <button>Edit Profile</button>
            </div>
          ) : (
            <div className="visiting-profile-btn-container">
              <Link to={`/profile/${viewedUser._id}/friends`}>
                {" "}
                <div className="profile-friends-btn-container">
                  <img src={profileFriendsPicture} alt="friend"></img>

                  <button>Friends</button>
                </div>{" "}
              </Link>
              <div className="profile-message-btn-container">
                <img src={messageButtonPicture} alt="thunder bolt"></img>
                <button>Message</button>
              </div>
            </div>
          )}
        </div>
        <div></div>
      </div>
      {/* nav under ProfileUpper-second */}
      <div className="ProfileUpper-third">
        <ul className="ProfileUpper-nav">
          <Link to={`/profile/${viewedUser._id}`}>
            <li
              onClick={() => setSelectedTab("posts")}
              style={
                selectedTab === "posts"
                  ? {
                      boxShadow: " inset 0 -3px rgb(24, 119, 242)",
                      color: "rgb(24, 119, 242)",
                    }
                  : null
              }
            >
              Posts
            </li>
          </Link>
          <Link to={`/profile/${viewedUser._id}/about`}>
            <li
              onClick={() => setSelectedTab("about")}
              style={
                selectedTab === "about"
                  ? {
                      boxShadow: " inset 0 -3px rgb(24, 119, 242)",
                      color: "rgb(24, 119, 242)",
                    }
                  : null
              }
            >
              About
            </li>
          </Link>
          <Link to={`/profile/${viewedUser._id}/friends`}>
            <li
              onClick={() => setSelectedTab("friends")}
              style={
                selectedTab === "friends"
                  ? {
                      boxShadow: " inset 0 -3px rgb(24, 119, 242)",
                      color: "rgb(24, 119, 242)",
                    }
                  : null
              }
            >
              Friends
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ProfileUpper;
