import "./SideNav.css";
import findFriends from "./SideNavImages/find-friends.png";
import mostRecent from "./SideNavImages/most-recent.png";
import liked from "./SideNavImages/liked.png";
import oldest from "./SideNavImages/oldest.png";
import sendMessage from "./SideNavImages/send-message.png";
import { Link } from "react-router-dom";

import { useState } from "react";
const SideNav = () => {
  const [userData] = useState({
    firstname: "Anthony",
    lastname: "Nucci",
    picture:
      "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
  });

  return (
    <div className="SideNav">
      <ul>
        <Link to="/profile">
          <li>
            <img
              className="SideNav-profile-img"
              src={userData.picture}
              alt="Profile"
            ></img>
            <span>{userData.firstname}&nbsp;</span>
            <span>{userData.lastname}</span>
          </li>
        </Link>
        <li>
          <img src={findFriends} alt="Find friends"></img>
          <p>Find Friends</p>
        </li>
        <li>
          <img src={mostRecent} alt="Most recent"></img>
          <p>Most Recent</p>
        </li>
        <li>
          <img src={liked} alt="Liked"></img>
          <p>Liked</p>
        </li>
        <li>
          <img src={oldest} alt="OLdest"></img>
          <p>Oldest</p>
        </li>
        <li>
          <img src={sendMessage} alt="Send Message"></img>
          <p>Send Message</p>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
