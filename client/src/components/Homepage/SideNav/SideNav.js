import "./SideNav.css";
import findFriends from "./SideNavImages/find-friends.png";
import mostRecent from "./SideNavImages/most-recent.png";
import liked from "./SideNavImages/liked.png";
import oldest from "./SideNavImages/oldest.png";
import sendMessage from "./SideNavImages/send-message.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateTab, updateTimeline } from "../../../redux/actions/user";
import { getUserPostsRequest } from "../../../api/post";
import { GET_TIMELINE } from "../../../redux/actions/types";

const SideNav = () => {
  const dispatch = useDispatch();
  // tab state to only get timeline if tab is on liked, (avoids spamming tab and ugly rerenders)

  const { user, timelineTab } = useSelector((state) => state.userReducer);

  const handleMostRecent = async () => {
    if (timelineTab !== "new") {
      dispatch(updateTab("new"));
    }
  };

  const handleOldest = async () => {
    if (timelineTab !== "old") {
      dispatch(updateTab("old"));
    }
  };

  const handleLiked = async () => {
    if (timelineTab !== "liked") {
      dispatch(updateTab("liked"));
    }
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
        <li
          onClick={handleMostRecent}
          style={
            timelineTab === "new"
              ? { backgroundColor: "rgba(212, 211, 211, 0.418)" }
              : null
          }
        >
          <img src={mostRecent} alt="Most recent"></img>
          <p>Most Recent</p>
        </li>

        <li
          onClick={handleLiked}
          style={
            timelineTab === "liked"
              ? { backgroundColor: "rgba(212, 211, 211, 0.418)" }
              : null
          }
        >
          <img src={liked} alt="Liked"></img>
          <p>Liked</p>
        </li>
        <li
          onClick={handleOldest}
          style={
            timelineTab === "old"
              ? { backgroundColor: "rgba(212, 211, 211, 0.418)" }
              : null
          }
        >
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
