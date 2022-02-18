import "./CommentsSection.css";
import Comment from "./Comment/Comment";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCommentRequest } from "../../../api/comment";
import { useParams } from "react-router-dom";
import { getUser } from "../../../redux/actions/viewedUser";

const CommentsSection = ({ post }) => {
  const inputRef = useRef(null);
  const params = useParams();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);

  const [createCommentData, setCreateCommentData] = useState({
    user: user._id,
    content: null,
    post,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateCommentData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!createCommentData.content) return;
    addCommentRequest(createCommentData);
    // renders the updated comments
    dispatch(getUser(params.id));

    setCreateCommentData({
      user: user._id,
      content: null,
      post,
    });

    inputRef.current.reset();
  };

  // focuses the input box when component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="CommentsSection">
      <div className="CommentsSection-write-comment-container">
        <img src={user.profile[0].profilePicture} alt="Profile"></img>
        <div>
          <form ref={inputRef}>
            <input
              onChange={handleChange}
              name="content"
              placeholder="Write a comment..."
            ></input>
            <button onClick={handleSubmit}>Post</button>{" "}
          </form>
        </div>
      </div>
      {/* map over the post comments and display comment */}
      {post.comments
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((comment, index) => {
          return <Comment comment={comment} key={index} post={post} />;
        })}
    </div>
  );
};

export default CommentsSection;
