import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Comment = mongoose.model(
  "Comment",
  new Schema(
    {
      user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
      content: {
        type: String,
        required: true,
      },
      replies: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Comment",
        },
      ],
    },
    { timestamps: true }
  )
);

export default Comment;
