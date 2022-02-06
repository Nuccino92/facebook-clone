import "./CommentsSection.css";
import Comment from "./Comment/Comment";
import { useEffect, useRef, useState } from "react";

const CommentsSection = ({ comments }) => {
  const inputRef = useRef(null);
  const [user] = useState({
    firstname: "Anthony",
    lastname: "Nucci",
    picture:
      "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
  });

  // focuses the input box when component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="CommentsSection">
      <div className="CommentsSection-write-comment-container">
        <img src={user.picture} alt="Profile"></img>
        <div>
          <input
            ref={inputRef}
            name="comment"
            placeholder="Write a comment..."
          ></input>
          <button>Post</button>
        </div>
      </div>
      {/* map over the post comments and display comment */}
      {comments.map((comment, index) => {
        return <Comment comment={comment} key={index} />;
      })}
    </div>
  );
};

export default CommentsSection;
