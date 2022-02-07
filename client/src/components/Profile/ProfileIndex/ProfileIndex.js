import "./ProfileIndex.css";
import Post from "../../Post/Post";
import { useState } from "react";
import { FcStackOfPhotos } from "react-icons/fc";
import { Link } from "react-router-dom";
import About from "../About/About";

const ProfileIndex = ({ myProfile, setSelectedTab }) => {
  const picture =
    "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg";

  const [post, usePost] = useState([
    {
      user: "Anthony Nucci",
      userPicture:
        "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
      createdAt: "Sat Jan 5 2022 00:00:00 GMT-0500 (Eastern Standard Time)",
      picture:
        "https://cochonnailles.ca/wp-content/uploads/2013/12/random-owl.jpg",
      description: "this is an owl with a sick hat",
      likes: ["Anthony", "Cruz", "George"],
      comments: [
        {
          user: "Anthony",
          userPicture:
            "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
          comment:
            "I Love this photo I Love this photo I Love this photo I Love this photo I Love this photo",
          createdAt:
            "Sat Jan 06 2022 00:00:00 GMT-0500 (Eastern Standard Time)",
          likes: ["Cruz"],
          replies: [
            {
              user: "Cruz",
              userPicture:
                "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
              comment: "Me too!",
            },
          ],
        },
        {
          user: "Cruz",
          userPicture:
            "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
          comment: "HAHA funny",
          createdAt:
            "Sat Jan 08 2022 00:00:00 GMT-0500 (Eastern Standard Time)",
          likes: ["Anthony"],
          replies: [],
        },
        {
          user: "George",
          userPicture:
            "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
          comment: "bad picture",
          createdAt:
            "Sat Jan 11 2022 00:00:00 GMT-0500 (Eastern Standard Time)",
          likes: [],
          replies: [],
        },
      ],
    },
    {
      user: "Anthony Nucci",
      userPicture:
        "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
      createdAt: "Sat Jan 5 2022 00:00:00 GMT-0500 (Eastern Standard Time)",
      picture:
        "https://cochonnailles.ca/wp-content/uploads/2013/12/random-owl.jpg",
      description: "this is an owl with a sick hat",
      likes: ["Anthony", "Cruz", "George"],
      comments: [
        {
          user: "Anthony",
          userPicture:
            "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
          comment:
            "I Love this photo I Love this photo I Love this photo I Love this photo I Love this photo",
          createdAt:
            "Sat Jan 06 2022 00:00:00 GMT-0500 (Eastern Standard Time)",
          likes: ["Cruz"],
          replies: [
            {
              user: "Cruz",
              userPicture:
                "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
              comment: "Me too!",
            },
          ],
        },
        {
          user: "Cruz",
          userPicture:
            "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
          comment: "HAHA funny",
          createdAt:
            "Sat Jan 08 2022 00:00:00 GMT-0500 (Eastern Standard Time)",
          likes: ["Anthony"],
          replies: [],
        },
        {
          user: "George",
          userPicture:
            "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
          comment: "bad picture",
          createdAt:
            "Sat Jan 11 2022 00:00:00 GMT-0500 (Eastern Standard Time)",
          likes: [],
          replies: [],
        },
      ],
    },
    {
      user: "Anthony Nucci",
      userPicture:
        "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
      createdAt: "Sat Jan 5 2022 00:00:00 GMT-0500 (Eastern Standard Time)",
      picture:
        "https://cochonnailles.ca/wp-content/uploads/2013/12/random-owl.jpg",
      description: "this is an owl with a sick hat",
      likes: ["Anthony", "Cruz", "George"],
      comments: [
        {
          user: "Anthony",
          userPicture:
            "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
          comment:
            "I Love this photo I Love this photo I Love this photo I Love this photo I Love this photo",
          createdAt:
            "Sat Jan 06 2022 00:00:00 GMT-0500 (Eastern Standard Time)",
          likes: ["Cruz"],
          replies: [
            {
              user: "Cruz",
              userPicture:
                "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
              comment: "Me too!",
            },
          ],
        },
        {
          user: "Cruz",
          userPicture:
            "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
          comment: "HAHA funny",
          createdAt:
            "Sat Jan 08 2022 00:00:00 GMT-0500 (Eastern Standard Time)",
          likes: ["Anthony"],
          replies: [],
        },
        {
          user: "George",
          userPicture:
            "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
          comment: "bad picture",
          createdAt:
            "Sat Jan 11 2022 00:00:00 GMT-0500 (Eastern Standard Time)",
          likes: [],
          replies: [],
        },
      ],
    },
  ]);

  const [userData] = useState([
    {
      firstname: "Demetrius",
      email: "mauris@protonmail.org",
      lastname: "Allen Lambert",
      picture:
        "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
      birthday: "Sat Jan 01 2022 00:00:00 GMT-0500 (Eastern Standard Time)",
    },
    {
      firstname: "Cruz",
      email: "dis.parturient.montes@aol.couk",
      lastname: "Bertha",
      picture:
        "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
      birthday: "Sat Jan 01 2022 00:00:00 GMT-0500 (Eastern Standard Time)",
    },
    {
      firstname: "George",
      email: "laoreet.ipsum.curabitur@icloud.ca",
      lastname: "Margaret",
      picture:
        "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
      birthday: "Sat Jan 01 2022 00:00:00 GMT-0500 (Eastern Standard Time)",
    },
    {
      firstname: "Warren",
      email: "accumsan@protonmail.com",
      lastname: "Pascale",
      picture:
        "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
      birthday: "Sat Jan 01 2022 00:00:00 GMT-0500 (Eastern Standard Time)",
    },

    {
      firstname: "Gabriel",
      email: "vulputate@hotmail.couk",
      lastname: "Hayes",
      picture:
        "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
      birthday: "Sat Jan 01 2022 00:00:00 GMT-0500 (Eastern Standard Time)",
    },
  ]);

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
              to={`/profile/friends`}
              onClick={() => setSelectedTab("friends")}
            >
              <span>See all friends</span>
            </Link>
          </div>
          <p>{userData.length} Friends</p>
          <div className="ProfileIndex-friends-list-container">
            {userData.map((user, index) => {
              return (
                <div key={index} className="ProfileIndex-friends-list">
                  <img src={user.picture} alt="Profile"></img>
                  <span>{user.firstname}</span>
                  <span>{user.lastname}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* -------------right side index ------------------ */}
      <div className="ProfileIndex-right">
        {myProfile && (
          <div className="ProfileCreatePost-container">
            <div>
              <img src={picture} alt="Profile"></img>
              <input
                type="text"
                name="post"
                placeholder="What's on your mind?"
              ></input>
            </div>
            <div style={{ marginTop: "20px" }}>
              <label htmlFor="postPicture" className="custom-file-upload">
                <FcStackOfPhotos /> Photo
                <input name="picture" id="postPicture" type="file" />
              </label>
            </div>
          </div>
        )}
        {/* ------------------posts portion---------------- */}
        <div className="ProfileIndex-post-container">
          {post.map((p, index) => {
            return <Post p={p} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileIndex;
