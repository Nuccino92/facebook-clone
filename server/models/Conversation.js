import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Conversation = mongoose.model(
  "Conversation",
  new Schema(
    {
      users: {
        type: Array,
      },
    },
    { timestamps: true }
  )
);

export default Conversation;
