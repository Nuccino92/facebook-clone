import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  acceptFriendRequest,
  getUserRequest,
  rejectFriendRequest,
  sendFriendRequest,
} from "../../../../api/user";
import { loadUser } from "../../../../redux/actions/user";
import FriendsDropdown from "../FriendsDropdown/FriendsDropdown";

const FriendsCard = ({ friend }) => {
  const dispatch = useDispatch();

  const { profile } = friend;

  const { user } = useSelector((state) => state.userReducer);

  const [friendRequestInfo, setFriendRequestInfo] = useState(null);

  const handleAddFriend = async () => {
    const requestUser = await getUserRequest(friend._id);

    await sendFriendRequest(friend._id, user, requestUser.data.response).then(
      () => {
        dispatch(loadUser());
      }
    );
  };

  const handleAcceptFriend = async () => {
    const requestUser = await getUserRequest(friend._id);

    await acceptFriendRequest(user._id, user, requestUser.data.response).then(
      () => {
        dispatch(loadUser());
      }
    );
  };

  const handleRejectFriend = async () => {
    const requestUser = await getUserRequest(friend._id);

    await rejectFriendRequest(user._id, user, requestUser.data.response).then(
      () => {
        dispatch(loadUser());
      }
    );
  };

  useEffect(() => {
    if (user.friendRequests.length === 0) {
      return setFriendRequestInfo(null);
    }

    user.friendRequests.find((request) => {
      if (request.type === "sender" && request.recipient._id === friend._id) {
        return setFriendRequestInfo("pending");
      }

      if (request.type === "recipient" && request.sender._id === friend._id) {
        return setFriendRequestInfo("recieved");
      } else return setFriendRequestInfo(null);
    });
  }, [user.friendRequests, friend]);

  return (
    <div>
      <div>
        <Link to={`/profile/${friend._id}`}>
          {" "}
          <img src={profile[0].profilePicture} alt="Profile"></img>
        </Link>
        <span>
          {profile[0].firstName} {profile[0].lastName}
        </span>
      </div>
      {friendRequestInfo === "pending" ? (
        <button onClick={handleRejectFriend}>Cancel Request</button>
      ) : friendRequestInfo === "recieved" ? (
        <button onClick={handleAcceptFriend}>Confirm Request </button>
      ) : user.friends.includes(friend._id) ? (
        <FriendsDropdown friend={friend} />
      ) : user._id === friend._id ? (
        <button>Your Account</button>
      ) : (
        <button onClick={handleAddFriend}>Add friend</button>
      )}
    </div>
  );
};

export default FriendsCard;
