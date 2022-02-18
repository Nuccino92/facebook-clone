import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Post = mongoose.model(
  "Post",
  new Schema(
    {
      user: {
        type: mongoose.Types.ObjectId,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      picture: {
        type: String,
        required: true,
      },
      likes: [
        {
          type: mongoose.Types.ObjectId,
          ref: "User",
        },
      ],
      comments: [
        {
          type: Object,
          ref: "Comment",
        },
      ],
    },
    { timestamps: true }
  )
);

export default Post;
