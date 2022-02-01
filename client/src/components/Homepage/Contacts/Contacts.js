import { useState } from "react";
import "./Contacts.css";
import ContactsCard from "./ContactsCard/ContactsCard";

const Contacts = () => {
  // toggles profile card
  const [displayProfile, setDisplayProfile] = useState(false);
  // gets index to properly render profile card
  const [stateIndex, setStateIndex] = useState(null);
  // data over user with mouse event for contacts card
  const [profileCardData, setProfileCardData] = useState({});
  // development dummy data
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

  const handleMouseOver = (e, user, index) => {
    setDisplayProfile(true);
    setStateIndex(index);
    setProfileCardData(user);
  };

  return (
    <div className="Contacts">
      <ul>
        <h3>Contacts</h3>
        {userData.map((user, index) => {
          return (
            <li
              key={index}
              onMouseOver={(e) => handleMouseOver(e, user, index)}
              onMouseOut={() => setDisplayProfile(false)}
            >
              {displayProfile && stateIndex === index && (
                <ContactsCard
                  data={profileCardData}
                  onMouseOver={() => setDisplayProfile(true)}
                />
              )}
              <img src={user.picture} alt="Profile"></img>
              <span>{user.firstname}&nbsp;</span>
              <span> {user.lastname}</span>
            </li>
          );
        })}{" "}
      </ul>
    </div>
  );
};

export default Contacts;
