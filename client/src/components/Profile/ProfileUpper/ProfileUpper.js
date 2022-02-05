import { useState } from "react";
import "./ProfileUpper.css";
import editProfilePicture from "./edit-profile.png";
import messageButtonPicture from "./message-button.png";
import profileFriendsPicture from "./profile-friends-btn.png";

const ProfileUpper = ({ myProfile }) => {
  const [selectedNav, setSelectedNav] = useState("posts");
  const [user] = useState({
    firstname: "Anthony",
    lastname: "Nucci",
    picture:
      "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
    profile: {
      //   coverPhoto:
      //     "https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    friends: [
      {
        name: "John",
        picture:
          "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
      },
      {
        name: "Larry",
        picture:
          "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
      },
      {
        name: "Denzel",
        picture:
          "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
      },
      {
        name: "Scottie Barnes",
        picture:
          "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
      },
    ],
  });
  return (
    <div className="ProfileUpper">
      {/* coverPhoto container */}
      <div className="ProfileUpper-first">
        {user.profile.coverPhoto && (
          <img src={user.profile.coverPhoto} alt="Profile cover"></img>
        )}
      </div>
      {/* profile picture,  name/friends & buttons container */}
      <div className="ProfileUpper-second">
        <div className="ProfileUpper-second-left">
          {/* profile image container */}
          <div className="ProfileUpper-second-left-img-container">
            <img src={user.picture} alt="Profile"></img>
          </div>
          {/* name/friends container */}
          <div className="ProfileUpper-second-left-name-container">
            <h1>
              {user.firstname} {user.lastname}
            </h1>
            {/* if only 1 friend use singular word */}
            {user.friends.length === 1 ? (
              <p>{user.friends.length} Friend</p>
            ) : (
              <p> {user.friends.length} Friends</p>
            )}
          </div>
        </div>
        {/* buttons to the right of name */}
        <div className="ProfileUpper-second-right">
          {/* display certain buttons depending on if users profile or not */}
          {myProfile ? (
            <div className="edit-profile-btn-container">
              <img src={editProfilePicture} alt="pencil"></img>
              <button>Edit Profile</button>
            </div>
          ) : (
            <div className="visiting-profile-btn-container">
              <div className="profile-friends-btn-container">
                <img src={profileFriendsPicture} alt="friend"></img>
                <button>Friends</button>
              </div>
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
          <li
            onClick={() => setSelectedNav("posts")}
            style={
              selectedNav === "posts"
                ? {
                    boxShadow: " inset 0 -3px rgb(24, 119, 242)",
                    color: "rgb(24, 119, 242)",
                  }
                : null
            }
          >
            Posts
          </li>
          <li
            onClick={() => setSelectedNav("about")}
            style={
              selectedNav === "about"
                ? {
                    boxShadow: " inset 0 -3px rgb(24, 119, 242)",
                    color: "rgb(24, 119, 242)",
                  }
                : null
            }
          >
            About
          </li>
          <li
            onClick={() => setSelectedNav("friends")}
            style={
              selectedNav === "friends"
                ? {
                    boxShadow: " inset 0 -3px rgb(24, 119, 242)",
                    color: "rgb(24, 119, 242)",
                  }
                : null
            }
          >
            Friends
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileUpper;
