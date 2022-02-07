import { useState } from "react";
import "./FriendRequests.css";

const FriendRequests = () => {
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

  return (
    <div className="FriendRequests">
      <h1>Friend Requests</h1>
      <div className="friend-request-grid">
        {userData.map((user, index) => {
          return (
            <div className="friend-request" key={index}>
              <img src={user.picture} alt="Profile"></img>
              <div>
                <h3>
                  {user.firstname} {user.lastname}
                </h3>
                <button className="friend-request-confirm">Confirm</button>
                <button className="friend-request-delete">Delete</button>
              </div>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
};

export default FriendRequests;
