import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  acceptFriendRequest,
  getUserRequest,
  rejectFriendRequest,
} from "../../api/user";
import { loadUser } from "../../redux/actions/user";
import "./FriendRequests.css";

const FriendRequests = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);

  const handleAcceptFriendRequest = async (e, request) => {
    e.stopPropagation();
    e.preventDefault();

    const requestUser = await getUserRequest(request.sender._id);

    await acceptFriendRequest(user._id, user, requestUser.data.response).then(
      () => {
        dispatch(loadUser());
      }
    );
  };

  const handleRejectFriendRequest = async (e, request) => {
    e.stopPropagation();
    e.preventDefault();
    const requestUser = await getUserRequest(request.sender._id);

    await rejectFriendRequest(user._id, user, requestUser.data.response).then(
      () => {
        dispatch(loadUser());
      }
    );
  };

  return (
    <div className="FriendRequests">
      <h1>Friend Requests</h1>
      <div className="friend-request-grid">
        {user.friendRequests.length === 0 ? (
          <h2 className="">No new friend requests</h2>
        ) : (
          user.friendRequests.map((request, index) => {
            return (
              request.type === "recipient" && (
                <Link to={`/profile/${request.sender._id}`} key={index}>
                  <div className="friend-request">
                    <img
                      src={request.sender.profile[0].profilePicture}
                      alt="Profile"
                    ></img>
                    <div>
                      <h3>
                        {request.sender.profile[0].firstName}{" "}
                        {request.sender.profile[0].lastName}
                      </h3>
                      <button
                        className="friend-request-confirm"
                        onClick={(e) => handleAcceptFriendRequest(e, request)}
                      >
                        Confirm
                      </button>
                      <button
                        className="friend-request-delete"
                        onClick={(e) => handleRejectFriendRequest(e, request)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </Link>
              )
            );
          })
        )}{" "}
      </div>
    </div>
  );
};

export default FriendRequests;
