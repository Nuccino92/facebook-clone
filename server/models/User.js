import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = mongoose.model(
  "User",
  new Schema(
    {
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      friends: [
        {
          type: mongoose.Types.ObjectId,
          ref: "User",
        },
      ],
      friendRequests: [
        {
          type: mongoose.Types.ObjectId,
          ref: "User",
        },
      ],
      posts: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Post",
        },
      ],
      likedPosts: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Post",
        },
      ],
      profile: [
        {
          firstName: {
            type: String,
            required: true,
          },
          lastName: {
            type: String,
            required: true,
          },
          bio: {
            type: String,
          },
          birthday: {
            type: String,
            required: true,
          },
          gender: {
            type: String,
            required: true,
          },
          profilePicture: {
            type: String,
            default:
              "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
          },
          coverPhoto: {
            type: String,
          },
        },
      ],
    },
    { timestamps: true }
  )
);

export default User;
