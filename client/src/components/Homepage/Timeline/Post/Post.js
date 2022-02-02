import "./Post.css";
import likesPhoto from "./like.svg";
import moment from "moment";
import { BiLike } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { useState } from "react";
import CommentsSection from "../CommentsSection/CommentsSection";

const Post = ({ p }) => {
  const [comments, setComments] = useState(false);
  const handleComments = () => {
    setComments((prev) => {
      return !prev;
    });
  };

  return (
    <div className="Post">
      <div className="Post-header">
        <img src={p.userPicture} alt="Profile"></img>
        <div className="Post-header-right">
          <div>{p.user}</div>
          <p>{moment(new Date(p.createdAt)).fromNow()}</p>
        </div>
      </div>
      <div className="Post-desciption">{p.description}</div>
      <div className="Post-picture">
        <img src={p.picture} alt="Post"></img>
      </div>

      <div className="Post-stats">
        <div>
          <img src={likesPhoto} alt="likes"></img>
          <span> {p.likes.length}</span>
        </div>

        <div onClick={handleComments}>{p.comments.length} Comments</div>
      </div>
      <div className="Post-interaction">
        <div>
          <BiLike size={18} />
          &nbsp; LIKE
        </div>
        <div onClick={() => setComments(true)}>
          <GoComment size={18} />
          &nbsp; COMMENT
        </div>
      </div>
      {comments && <CommentsSection comments={p.comments} />}
    </div>
  );
};

export default Post;
