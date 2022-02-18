import { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { getUserRequest } from "../../../../../api/user";
import "./Reply.css";

const Reply = ({ reply, userData }) => {
  // user data of author of this reply
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (reply !== null) {
      const getUserData = async () => {
        const res = await getUserRequest(reply.user);
        setUser(res.data.response);
      };
      getUserData();
    }
  }, [reply]);

  return user === null ? (
    <></>
  ) : (
    <div className="Reply">
      {" "}
      <Link to={`/profile/${user._id}`}>
        <img src={userData.profilePicture} alt="Profile"></img>
      </Link>
      <div>
        <div>
          {" "}
          <Link to={`/profile/${user._id}`}>
            <h4>
              {user.profile[0].firstName} {user.profile[0].lastName}
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
