import "./Post.css";
import likesPhoto from "./like.svg";
import moment from "moment";
import { BiLike } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { useEffect, useState } from "react";
import CommentsSection from "./CommentsSection/CommentsSection";
import { addLikedPostRequest, getUserRequest } from "../../api/user";
import { Link, useParams } from "react-router-dom";
import { updatePostLikesRequest } from "../../api/post";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions/viewedUser";
import { getUserTimeline, loadUser } from "../../redux/actions/user";

const Post = ({ post }) => {
  const params = useParams();
  const dispatch = useDispatch();

  const [comments, setComments] = useState(false);
  // the author of the post w/ their data
  const [postUser, setPostUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likedPost, setLikedPost] = useState(undefined);
  // to make sure that the like button isnt pressed before the api can come back with updated data
  const [dispatching, setDispatching] = useState(false);

  const { user, timelineTab } = useSelector((state) => state.userReducer);

  const handleLikes = async () => {
    setDispatching(true);

    await updatePostLikesRequest(post._id, post, user);
    await addLikedPostRequest(user._id, post, user);

    // updates active user in homepage
    dispatch(loadUser());

    // updates viewed user in profile section
    if (params.id !== undefined) {
      dispatch(getUser(params.id));
      return setTimeout(() => {
        setDispatching(false);
      }, 3000);
    }

    if (params.id === undefined) {
      dispatch(getUserTimeline(user, user.friends, timelineTab));
      return setTimeout(() => {
        setDispatching(false);
      }, [3000]);
    }
  };

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

  useEffect(() => {
    post.likes.includes(user._id) ? setLikedPost(true) : setLikedPost(false);
  }, [post.likes, user._id]);

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
        <img src={post.picture} alt="Post"></img>
      </div>

      <div className="Post-stats">
        <div onClick={() => !dispatching && handleLikes()}>
          <img src={likesPhoto} alt="likes"></img>

          <span
            style={
              likedPost ? { color: "rgb(65,236,41)", fontWeight: 700 } : null
            }
          >
            {" "}
            {post.likes.length}
          </span>
        </div>

        <div onClick={handleComments}>{post.comments.length} Comments</div>
      </div>

      <div className="Post-interaction">
        <div onClick={handleLikes}>
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
