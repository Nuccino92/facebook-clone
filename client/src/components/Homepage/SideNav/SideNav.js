import "./SideNav.css";
import findFriends from "./SideNavImages/find-friends.png";
import mostRecent from "./SideNavImages/most-recent.png";
import liked from "./SideNavImages/liked.png";
import oldest from "./SideNavImages/oldest.png";
import sendMessage from "./SideNavImages/send-message.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateTimeline } from "../../../redux/actions/user";

const SideNav = () => {
  const dispatch = useDispatch();
  const { user, timeline } = useSelector((state) => state.userReducer);

  const handleMostRecent = () => {
    dispatch(
      updateTimeline(
        timeline.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      )
    );
  };

  const handleOldest = () => {
    dispatch(
      updateTimeline(
        timeline.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      )
    );
  };

  return (
    <div className="SideNav">
      <ul>
        <Link to={`/profile/${user._id}`} state={user}>
          <li>
            <img
              className="SideNav-profile-img"
              src={user.profile[0].profilePicture}
              alt="Profile"
            ></img>
            <span>{user.profile[0].firstName}&nbsp;</span>
            <span>{user.profile[0].lastName}</span>
          </li>
        </Link>
        <Link to={`friends/${user._id}`}>
          <li>
            <img src={findFriends} alt="Find friends"></img>
            <p>Friend Requests</p>
          </li>{" "}
        </Link>
        <li onClick={handleMostRecent}>
          <img src={mostRecent} alt="Most recent"></img>
          <p>Most Recent</p>
        </li>
        <li>
          <img src={liked} alt="Liked"></img>
          <p>Liked</p>
        </li>
        <li onClick={handleOldest}>
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
