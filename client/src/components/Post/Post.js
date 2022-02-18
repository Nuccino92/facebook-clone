import "./Post.css";
import likesPhoto from "./like.svg";
import moment from "moment";
import { BiLike } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { useEffect, useState } from "react";
import CommentsSection from "./CommentsSection/CommentsSection";
import { getUserRequest } from "../../api/user";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const url = "http://localhost:8000/";

  const [comments, setComments] = useState(false);
  // the author of the post w/ their data
  const [postUser, setPostUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleComments = () => {
    setComments((prev) => {
      return !prev;
    });
  };

  useEffect(() => {
    const getUser = async () => {
      const res = await getUserRequest(post.user);
      setPostUser(res.data.response);
      setLoading(false);
    };
    getUser();
  }, [post]);

  return loading ? (
    <div>loading</div>
  ) : (
    <div className="Post">
      <div className="Post-header">
        <img src={postUser.profile[0].profilePicture} alt="Profile"></img>
        <div className="Post-header-right">
          <Link to={`/profile/${postUser._id}`}>
            <div>
              {postUser.profile[0].firstName} {postUser.profile[0].lastName}
            </div>
          </Link>

          <p>{moment(new Date(post.createdAt)).fromNow()}</p>
        </div>
      </div>
      <div className="Post-desciption">{post.content}</div>
      <div className="Post-picture">
        <img src={url + post.picture} alt="Post"></img>
      </div>

      <div className="Post-stats">
        <div>
          <img src={likesPhoto} alt="likes"></img>
          <span> {post.likes.length}</span>
        </div>

        <div onClick={handleComments}>{post.comments.length} Comments</div>
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
      {comments && <CommentsSection comments={post.comments} post={post} />}
    </div>
  );
};

export default Post;
