import Post from "../models/Post.js";
import User from "../models/User.js";

export const posts_Post = async (req, res) => {
  const { user, content } = req.body;
  const { path } = req.file;

  const newPost = Post({
    user,
    content,
    picture: path,
  });

  newPost.save().then(async (response) => {
    await User.findByIdAndUpdate(
      user,
      {
        $addToSet: { posts: response._id },
      },
      { new: true }
    ).then((user) => {
      return res.status(201).json({ user });
    });
  });
};

export const getPosts_Post = async (req, res) => {
  const posts = req.body;

  await Promise.all(posts.map(async (post) => await Post.findById(post)))
    .then((response) => {
      return res.status(201).json(response);
    })
    .catch((err) => {
      return res.status(400).json({ err });
    });
};
