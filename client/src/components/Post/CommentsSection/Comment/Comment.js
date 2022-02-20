import "./Comment.css";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import Reply from "./Reply/Reply";
import {
  addCommentReplyRequest,
  getCommentRequest,
} from "../../../../api/comment";
import { getUserRequest } from "../../../../api/user";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUser } from "../../../../redux/actions/viewedUser";
import FormError from "../../../FormError/FormError";
import { loadUser } from "../../../../redux/actions/user";

const Comment = ({ comment }) => {
  const replyRef = useRef(null);
  const params = useParams();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);

  const [errors, setErrors] = useState(false);

  const [replies, setReplies] = useState(false);

  // brought this in to active re render updates replies
  const { viewedUser } = useSelector((state) => state.viewedUserReducer);

  // data of user who posted comment
  const [userData, setUserData] = useState(null);

  // data of replies
  const [commentReplies, setCommentReplies] = useState([]);

  const [createReplyData, setCreateReplyData] = useState({
    user: user._id,
    content: null,
    comment: comment,
  });

  useEffect(() => {
    const getCommentData = async () => {
      const res = await getCommentRequest(comment._id);
      if (res.data === null) return;
      setCommentReplies(res.data.replies);
    };
    getCommentData();
  }, [comment._id, viewedUser, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateReplyData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    setErrors(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // stops user from sending request without content
    if (!createReplyData.content) {
      return setErrors(true);
    }
    addCommentReplyRequest(createReplyData);

    // updates viewed user in profile section
    if (params.id !== undefined) {
      dispatch(getUser(params.id));
    }

    // updates active user in homepage
    if (params.id === undefined) {
      dispatch(loadUser());
    }

    setCreateReplyData({
      user: user._id,
      content: null,
      comment: comment,
    });

    replyRef.current.reset();
  };

  const handleReplies = () => {
    setReplies((prev) => {
      return !prev;
    });
  };

  useEffect(() => {
    const getUserData = async () => {
      const res = await getUserRequest(comment.user);
      setUserData(res.data.response);
    };
    getUserData();
  }, [comment.user]);

  // focuses reply input when reply is true
  useEffect(() => {
    replies === true && replyRef.current.focus();
  }, [replies]);

  return userData === null ? (
    <></>
  ) : (
    //   each comment, with replies to it
    <div className="Comment">
      <div>
        <Link to={`/profile/${userData._id}`}>
          <img src={userData.profile[0].profilePicture} alt="Profile"></img>
        </Link>
        <div className="Comment-second">
          <div className="Comment-second-first">
            <Link to={`/profile/${user._id}`}>
              <h4>
                {userData.profile[0].firstName} {userData.profile[0].lastName}
                &#160;&#160;
                {userData._id === user._id && "(your comment)"}
              </h4>
            </Link>
            <p>{comment.content}</p>
          </div>
          <div className="Comment-second-second">
            <button onClick={handleReplies}>
              {commentReplies.length}{" "}
              {commentReplies.length === 1 ? "Reply" : "Replies"}
            </button>
            <p>{moment(new Date(comment.createdAt)).fromNow()}</p>{" "}
          </div>{" "}
        </div>
      </div>
      {/* if replies === true open reply section */}
      {replies && (
        <div className="ReplySection">
          {commentReplies.map((reply, index) => {
            return (
              <Reply
                reply={reply}
                key={index}
                userData={userData.profile[0]}
                comment={comment}
              />
            );
          })}
          <div className="ReplySection-write-comment-container">
            <img src={user.profile[0].profilePicture} alt="Profile"></img>
            <div>
              <form ref={replyRef}>
                <label htmlFor="reply">
                  {userData.profile[0].firstName} {userData.profile[0].lastName}
                </label>
                <input
                  maxLength={300}
                  name="content"
                  onChange={handleChange}
                ></input>
                <button onClick={handleSubmit}>Post</button>{" "}
              </form>
            </div>{" "}
          </div>
          {errors && (
            <FormError message={"Reply is empty"} location={"comment"} />
          )}
        </div>
      )}
    </div>
  );
};

export default Comment;
