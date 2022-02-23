import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Friends.css";
import FriendsCard from "./FriendsCard/FriendsCard";

const Friends = () => {
  const { myProfile, viewedUser, friendsInfo } = useSelector(
    (state) => state.viewedUserReducer
  );

  return (
    <div className="Friends">
      <header>
        <h2>Friends</h2>
        {myProfile && (
          <Link to={`/friends/${viewedUser._id}`}>
            <div>Friend Requests</div>
          </Link>
        )}
      </header>
      <div className="Friends-list-container">
        {friendsInfo.map((user, index) => {
          return <FriendsCard friend={user} key={index} />;
        })}{" "}
      </div>
    </div>
  );
};

export default Friends;
