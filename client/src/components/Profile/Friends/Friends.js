import { useState } from "react";
import { Link } from "react-router-dom";
import "./Friends.css";
import FriendsDropdown from "./FriendsDropdown/FriendsDropdown";

const Friends = ({ user, myProfile }) => {
  const [userData] = useState([
    {
      firstname: "Demetrius",
      email: "mauris@protonmail.org",
      lastname: "Allen Lambert",
      picture:
        "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
      birthday: "Sat Jan 01 2022 00:00:00 GMT-0500 (Eastern Standard Time)",
    },
    {
      firstname: "Cruz",
      email: "dis.parturient.montes@aol.couk",
      lastname: "Bertha",
      picture:
        "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
      birthday: "Sat Jan 01 2022 00:00:00 GMT-0500 (Eastern Standard Time)",
    },
    {
      firstname: "George",
      email: "laoreet.ipsum.curabitur@icloud.ca",
      lastname: "Margaret",
      picture:
        "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
      birthday: "Sat Jan 01 2022 00:00:00 GMT-0500 (Eastern Standard Time)",
    },
    {
      firstname: "Warren",
      email: "accumsan@protonmail.com",
      lastname: "Pascale",
      picture:
        "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
      birthday: "Sat Jan 01 2022 00:00:00 GMT-0500 (Eastern Standard Time)",
    },

    {
      firstname: "Gabriel",
      email: "vulputate@hotmail.couk",
      lastname: "Hayes",
      picture:
        "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
      birthday: "Sat Jan 01 2022 00:00:00 GMT-0500 (Eastern Standard Time)",
    },
  ]);

  // console.log(user, myProfile);
  return (
    <div className="Friends">
      <header>
        <h2>Friends</h2>
        {myProfile && (
          <Link to={`/friends/${user._id}`}>
            <div>Friend Requests</div>
          </Link>
        )}
      </header>
      <div className="Friends-list-container">
        {userData.map((user, index) => {
          return (
            <div key={index}>
              <div>
                <img src={user.picture} alt="Profile"></img>
                <span>
                  {user.firstname} {user.lastname}
                </span>
              </div>
              {!myProfile ? (
                <button>Add friend</button>
              ) : (
                <FriendsDropdown user={user} />
              )}
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
};

export default Friends;
