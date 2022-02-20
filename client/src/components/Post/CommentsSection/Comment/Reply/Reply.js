import { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { getUserRequest } from "../../../../../api/user";
import "./Reply.css";
import { useSelector } from "react-redux";

const Reply = ({ reply, userData }) => {
  // user data of author of this reply
  const [commentUser, setCommentUser] = useState(null);

  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (reply !== null) {
      const getUserData = async () => {
        const res = await getUserRequest(reply.user);
        setCommentUser(res.data.response);
      };
      getUserData();
    }
  }, [reply]);

  return commentUser === null ? (
    <></>
  ) : (
    <div className="Reply">
      {" "}
      <Link to={`/profile/${commentUser._id}`}>
        <img src={userData.profilePicture} alt="Profile"></img>
      </Link>
      <div>
        <div>
          {" "}
          <Link to={`/profile/${commentUser._id}`}>
            <h4>
              {commentUser.profile[0].firstName}{" "}
              {commentUser.profile[0].lastName} &#160;&#160;
              {commentUser._id === user._id && "(your reply)"}
            </h4>
          </Link>
          <p>
            <span>
              {userData.firstName} {userData.lastName}
            </span>{" "}
            {reply.content}
          </p>
        </div>{" "}
        <p>{moment(new Date(reply.createdAt)).fromNow()}</p>
      </div>
    </div>
  );
};

export default Reply;
