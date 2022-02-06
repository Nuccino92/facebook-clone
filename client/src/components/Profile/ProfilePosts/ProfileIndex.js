import Post from "../../Post/Post";
import { useState } from "react";
import "./ProfileIndex.css";

const ProfileIndex = ({ myProfile }) => {
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
  return (
    <div className="ProfileIndex">
      {myProfile && (
        <div className="ProfileCreatePost-container">
          <div>
            <img src={picture} alt="Profile"></img>
            <input name="post" placeholder="What's on your mind?"></input>
          </div>
        </div>
      )}
      <div className="ProfileIndex-container">
        {post.map((p, index) => {
          return <Post p={p} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ProfileIndex;
