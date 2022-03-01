import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserFriendsRequest } from "../../../api/user";
// import { useSelector } from "react-redux";
import "./Contacts.css";
import ContactsCard from "./ContactsCard/ContactsCard";

const Contacts = ({ onlineUsers }) => {
  // toggles profile card
  const [displayProfile, setDisplayProfile] = useState(false);
  // gets index to properly render profile card
  const [stateIndex, setStateIndex] = useState(null);

  const [userFriends, setUserFriends] = useState([]);

  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    const getFriends = async () => {
      const res = await getUserFriendsRequest(user._id, user.friends);
      setUserFriends(res.data);
    };
    getFriends();
  }, [user._id, user.friends]);

  const handleMouseOver = (user, index) => {
    setDisplayProfile(true);
    setStateIndex(index);
  };

  return (
    <div className="Contacts">
      <ul>
        <h3>Sponsored</h3>
        <div className="contacts-container">
          <h3>Contacts</h3>
          {userFriends.map((user, index) => {
            // checks if user is online
            const onlineStatus = onlineUsers.some(
              (active) => active.userId === user._id
            );
            return (
              <Link to={`/profile/${user._id}`} key={index}>
                <li
                  onMouseOver={() => handleMouseOver(user, index)}
                  onMouseOut={() => setDisplayProfile(false)}
                >
                  {displayProfile && stateIndex === index && (
                    <ContactsCard
                      user={user}
                      onMouseOver={() => setDisplayProfile(true)}
                    />
                  )}
                  <img src={user.profile[0].profilePicture} alt="Profile"></img>
                  {/* if user is online show this indicator div */}
                  {onlineStatus && <div className="online-indicator"></div>}
                  <span>
                    {user.profile[0].firstName} {user.profile[0].lastName}
                  </span>
                </li>{" "}
              </Link>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default Contacts;
