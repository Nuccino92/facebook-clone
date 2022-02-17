import { response } from "express";
import Comment from "../models/Comment.js";
import Post from "../models/Post.js";

export const addComment_Post = (req, res) => {
  const { user, content, post } = req.body;

  console.log(user, content, post);

  const newComment = Comment({
    user,
    content,
    replies: [],
  });

  newComment.save().then(async (response) => {
    await Post.findByIdAndUpdate(
      post,
      {
        $addToSet: { comments: response._id },
      },
      { new: true }
    ).then((post) => {
      console.log(post);
      return res.status(201).json({ post });
    });
  });
};

export const comment_Get = async (req, res) => {
  const { id } = req.params;

  await Comment.findById(id)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ err });
    });
};
