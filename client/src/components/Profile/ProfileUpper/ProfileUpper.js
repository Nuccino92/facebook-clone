import { useState } from "react";
import "./ProfileUpper.css";

const ProfileUpper = () => {
  const [myProfile, setMyProfile] = useState(true);
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
      <div className="ProfileUpper-first">
        {user.profile.coverPhoto && (
          <img src={user.profile.coverPhoto} alt="Profile cover"></img>
        )}
      </div>
      <div className="ProfileUpper-second">
        <div className="ProfileUpper-second-first">
          <img src={user.picture} alt="Profile"></img>
        </div>
        <div className="ProfileUpper-second-second">
          <h1>
            {user.firstname} {user.lastname}
          </h1>
          {user.friends.length === 1 ? (
            <p>{user.friends.length} Friend</p>
          ) : (
            <p> {user.friends.length} Friends</p>
          )}
        </div>
        <div className="ProfileUpper-second-third">
          {myProfile ? (
            <button>Edit Profile</button>
          ) : (
            <div>
              <button>Friends</button> <button>Message</button>
            </div>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProfileUpper;
