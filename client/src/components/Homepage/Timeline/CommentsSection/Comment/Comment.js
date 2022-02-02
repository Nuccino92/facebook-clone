import "./Comment.css";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import Reply from "./Reply/Reply";

const Comment = ({ comment }) => {
  const replyRef = useRef(null);
  const [replies, setReplies] = useState(false);
  const [user] = useState({
    firstname: "Anthony",
    lastname: "Nucci",
    picture:
      "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
  });

  const handleReplies = () => {
    setReplies((prev) => {
      return !prev;
    });
  };

  // focuses reply input when reply is true
  useEffect(() => {
    replies === true && replyRef.current.focus();
  }, [replies]);

  return (
    //   each comment, with replies to it
    <div className="Comment">
      <div>
        <img src={comment.userPicture} alt="Profile"></img>
        <div className="Comment-second">
          <div className="Comment-second-first">
            <h4>{comment.user}</h4>
            <p>{comment.comment}</p>
          </div>
          <div className="Comment-second-second">
            <button onClick={handleReplies}>Reply</button>
            <p>{moment(new Date(comment.createdAt)).fromNow()}</p>
          </div>{" "}
        </div>
      </div>
      {/* if replies === true open reply section */}
      {replies && (
        <div className="ReplySection">
          {comment.replies.map((reply, index) => {
            return <Reply reply={reply} key={index} username={comment.user} />;
          })}
          <div className="ReplySection-write-comment-container">
            <img src={user.picture} alt="Profile"></img>
            <div>
              <label htmlFor="reply">{comment.user}</label>
              <input ref={replyRef} maxLength={300} name="reply"></input>
              <button>Post</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;
