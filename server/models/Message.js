import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Message = mongoose.model(
  "Message",
  new Schema(
    {
      conversation: {
        type: mongoose.Types.ObjectId,
        ref: "Conversation",
        required: true,
      },
      sender: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  )
);

export default Message;
