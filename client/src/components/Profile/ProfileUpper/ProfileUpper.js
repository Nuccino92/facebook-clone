import "./ProfileUpper.css";
import editProfilePicture from "./edit-profile.png";
import messageButtonPicture from "./message-button.png";
import profileFriendsPicture from "./profile-friends-btn.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  acceptFriendRequest,
  rejectFriendRequest,
  sendFriendRequest,
} from "../../../api/user";
import { loadUser } from "../../../redux/actions/user";
import EditProfile from "./EditProfile/EditProfile";
import {
  closeConversation,
  findConversation,
  setOtherUser,
} from "../../../redux/actions/conversation";

const ProfileUpper = ({ selectedTab, setSelectedTab }) => {
  const dispatch = useDispatch();
  const { myProfile, viewedUser } = useSelector(
    (state) => state.viewedUserReducer
  );

  const { user } = useSelector((state) => state.userReducer);

  const [friendRequestInfo, setFriendRequestInfo] = useState(null);

  const [editModal, setEditModal] = useState(false);

  const handleAddFriend = async () => {
    await sendFriendRequest(viewedUser._id, user, viewedUser).then(() => {
      dispatch(loadUser());
    });
  };

  const handleAcceptFriend = async () => {
    await acceptFriendRequest(user._id, user, viewedUser).then(() => {
      dispatch(loadUser());
    });
  };

  const handleRejectFriend = async () => {
    await rejectFriendRequest(user._id, user, viewedUser).then(() => {
      dispatch(loadUser());
    });
  };

  const handleMessages = () => {
    dispatch(closeConversation());
    dispatch(setOtherUser(viewedUser));
    dispatch(findConversation(user._id, viewedUser._id));
  };

  useEffect(() => {
    if (user.friendRequests.length === 0) {
      return setFriendRequestInfo(null);
    }

    user.friendRequests.find((request) => {
      if (
        request.type === "sender" &&
        request.recipient._id === viewedUser._id
      ) {
        return setFriendRequestInfo("pending");
      }

      if (
        request.type === "recipient" &&
        request.sender._id === viewedUser._id
      ) {
        return setFriendRequestInfo("recieved");
      } else return setFriendRequestInfo(null);
    });
  }, [user.friendRequests, viewedUser._id]);

  return (
    <div className="ProfileUpper">
      {/* coverPhoto container */}
      <div className="ProfileUpper-first">
        {viewedUser.profile[0].coverPhoto && (
          <img src={viewedUser.profile[0].coverPhoto} alt="Profile cover"></img>
        )}
      </div>
      {/* profile picture,  name/friends & buttons container */}
      <div className="ProfileUpper-second">
        <div className="ProfileUpper-second-left">
          {/* profile image container */}
          <div className="ProfileUpper-second-left-img-container">
            <img src={viewedUser.profile[0].profilePicture} alt="Profile"></img>
          </div>
          {/* name/friends container */}
          <div className="ProfileUpper-second-left-name-container">
            <h1>
              {viewedUser.profile[0].firstName} {viewedUser.profile[0].lastName}
            </h1>
            <Link to={`/profile/${viewedUser._id}/friends`}>
              <p>
                {viewedUser.friends.length}&nbsp;
                {viewedUser.friends.length === 1 ? "Friend" : "Friends"}
              </p>{" "}
            </Link>
          </div>
        </div>
        {/* buttons to the right of name */}
        <div className="ProfileUpper-second-right">
          {/* display certain buttons depending on if viewedUsers profile or not */}
          {myProfile ? (
            <div className="edit-profile-btn-container">
              <img src={editProfilePicture} alt="pencil"></img>
              <button onClick={() => setEditModal(true)}>Edit Profile</button>
            </div>
          ) : // if user is viewing a non friends profile
          !user.friends.includes(viewedUser._id) ? (
            <div className="visiting-profile-btn-container">
              {" "}
              <div className="profile-friends-btn-container">
                <img src={profileFriendsPicture} alt="friend"></img>
                {/* conditional buttons */}
                {friendRequestInfo === "pending" ? (
                  <button onClick={handleRejectFriend}>Cancel Request</button>
                ) : friendRequestInfo === "recieved" ? (
                  <button onClick={handleAcceptFriend}>Confirm Request </button>
                ) : (
                  <button onClick={handleAddFriend}>Add friend</button>
                )}
              </div>{" "}
              <div className="profile-message-btn-container">
                <img src={messageButtonPicture} alt="thunder bolt"></img>
                <button onClick={handleMessages}>Message</button>
              </div>
            </div>
          ) : (
            // if user is viewing a friend
            <div className="visiting-profile-btn-container">
              <Link to={`/profile/${viewedUser._id}/friends`}>
                {" "}
                <div className="profile-friends-btn-container">
                  <img src={profileFriendsPicture} alt="friend"></img>

                  <button>Friends</button>
                </div>{" "}
              </Link>
              <div className="profile-message-btn-container">
                <img src={messageButtonPicture} alt="thunder bolt"></img>
                <button onClick={handleMessages}>Message</button>
              </div>
            </div>
          )}
        </div>
        <div></div>
      </div>
      {/* nav under ProfileUpper-second */}
      <div className="ProfileUpper-third">
        <ul className="ProfileUpper-nav">
          <Link to={`/profile/${viewedUser._id}`}>
            <li
              onClick={() => setSelectedTab("posts")}
              style={
                selectedTab === "posts"
                  ? {
                      boxShadow: " inset 0 -3px rgb(24, 119, 242)",
                      color: "rgb(24, 119, 242)",
                    }
                  : null
              }
            >
              Posts
            </li>
          </Link>
          <Link to={`/profile/${viewedUser._id}/about`}>
            <li
              onClick={() => setSelectedTab("about")}
              style={
                selectedTab === "about"
                  ? {
                      boxShadow: " inset 0 -3px rgb(24, 119, 242)",
                      color: "rgb(24, 119, 242)",
                    }
                  : null
              }
            >
              About
            </li>
          </Link>
          <Link to={`/profile/${viewedUser._id}/friends`}>
            <li
              onClick={() => setSelectedTab("friends")}
              style={
                selectedTab === "friends"
                  ? {
                      boxShadow: " inset 0 -3px rgb(24, 119, 242)",
                      color: "rgb(24, 119, 242)",
                    }
                  : null
              }
            >
              Friends
            </li>
          </Link>
        </ul>
      </div>
      {/* edit profile modal */}
      {editModal && <EditProfile setEditModal={setEditModal} />}
    </div>
  );
};

export default ProfileUpper;
