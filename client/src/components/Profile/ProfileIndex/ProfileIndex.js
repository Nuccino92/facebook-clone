import "./ProfileIndex.css";
import Post from "../../Post/Post";
import { useRef, useState } from "react";
import { FcStackOfPhotos } from "react-icons/fc";
import { Link } from "react-router-dom";
import About from "../About/About";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../../redux/actions/post";
import FormError from "../../FormError/FormError";
import whereGif from "./where.gif";

const ProfileIndex = ({ setSelectedTab }) => {
  const dispatch = useDispatch();

  const formRef = useRef(null);

  const { myProfile, viewedUser, friendsInfo, postsInfo } = useSelector(
    (state) => state.viewedUserReducer
  );

  const [createPostData, setCreatePostData] = useState({
    content: null,
    user: viewedUser,
    picture: null,
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;

    setErrorMessage(null);

    setCreatePostData((prev) => {
      return {
        ...prev,
        [name]: type === "file" ? files[0] : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!createPostData.content) {
      return setErrorMessage("Please add description");
    } else if (!createPostData.picture) {
      return setErrorMessage("Please upload an image");
    } else {
      const data = new FormData();

      data.append("content", createPostData.content);
      data.append("user", createPostData.user._id);
      data.append("picture", createPostData.picture);

      dispatch(addPost(data));

      setCreatePostData({
        content: null,
        user: viewedUser,
        picture: null,
      });
    }

    formRef.current.reset();
  };

  const picture =
    "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg";

  return (
    <div className="ProfileIndex">
      {/* ---------left side index------------ */}
      <div className="ProfileIndex-left">
        {/* -------------------intro portion-----------------------  */}
        <About />
        {/* -----------------friends portion------------------ */}
        <div className="ProfileIndex-friends">
          <div className="ProfileIndex-friends-header">
            <h2>Friends</h2>
            <Link
              to={`/profile/${viewedUser._id}/friends`}
              onClick={() => setSelectedTab("friends")}
            >
              <span>See all friends</span>
            </Link>
          </div>
          <p>
            {viewedUser.friends.length}{" "}
            {viewedUser.friends.length === 1 ? "Friend" : "Friends"}
          </p>
          <div className="ProfileIndex-friends-list-container">
            {friendsInfo.map((user, index) => {
              const { profile } = user;
              return (
                <Link to={`/profile/${user._id}`} key={index}>
                  <div className="ProfileIndex-friends-list">
                    <img src={profile[0].profilePicture} alt="Profile"></img>
                    <span>
                      {profile[0].firstName} {profile[0].lastName}
                    </span>
                  </div>{" "}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* -------------right side index ------------------ */}
      <div className="ProfileIndex-right">
        {myProfile && (
          <form ref={formRef}>
            <div className="ProfileCreatePost-container">
              <div>
                <img src={picture} alt="Profile"></img>
                <input
                  type="text"
                  name="content"
                  placeholder="What's on your mind?"
                  onChange={handleChange}
                ></input>
              </div>
              <div
                style={{ marginTop: "20px", justifyContent: "space-between" }}
              >
                <label htmlFor="postPicture" className="custom-file-upload">
                  <FcStackOfPhotos /> Photo
                  <input
                    name="picture"
                    id="postPicture"
                    type="file"
                    onChange={handleChange}
                  />
                </label>
                {errorMessage && (
                  <FormError message={errorMessage} location={"ProfileIndex"} />
                )}
                <button onClick={handleSubmit}>Add Post</button>
              </div>
            </div>{" "}
          </form>
        )}
        {/* ------------------posts portion---------------- */}
        {viewedUser.posts.length === 0 ? (
          <div className="ProfileIndex-post-no-posts">
            <h1>{viewedUser.profile[0].firstName} hasn't posted anything :(</h1>
            <img src={whereGif} alt="where are the posts"></img>
          </div>
        ) : (
          <div className="ProfileIndex-post-container">
            {postsInfo.map((p, index) => {
              return <Post post={p} key={index} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileIndex;
