import Comment from "../models/Comment.js";
import Post from "../models/Post.js";

export const addComment_Post = (req, res) => {
  const { user, content, post } = req.body;

  if (!user || !content || !post) {
    res.status(400).json({
      message: "Missing information",
    });
  } else {
    const newComment = Comment({
      user,
      content,
      replies: [],
      commentType: "COMMENT",
    });

    newComment.save().then(async (response) => {
      await Post.findByIdAndUpdate(
        post,
        {
          $addToSet: { comments: response },
        },
        { new: true }
      )
        .then((post) => {
          return res.status(201).json({ post });
        })
        .catch((err) => {
          return res.status(404).json({ err });
        });
    });
  }
};

export const comment_Get = async (req, res) => {
  const { id } = req.params;

  await Comment.findById(id)
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((err) => {
      return res.status(404).json(err.message);
    });
};

export const addCommentReply_Post = async (req, res) => {
  const { user, content, comment } = req.body;

  const newComment = Comment({
    user,
    content,
    commentType: "REPLY",
  });

  newComment.save().then(async (response) => {
    await Comment.findByIdAndUpdate(
      comment,
      {
        $addToSet: { replies: response },
      },
      { new: true }
    )
      .then((comment) => {
        return res.status(201).json({ comment });
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  });
};
