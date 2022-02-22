import Post from "../models/Post.js";
import User from "../models/User.js";

export const user_Get = async (req, res) => {
  const { id } = req.params;

  await User.findById(id)
    .select("-password")
    .then((response) => {
      res.status(201).json({ response });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ err });
    });
};

export const userTimeline_Get = async (req, res) => {
  const { id } = req.params;
  const array = [...req.body];
  let postsArray = [];

  array.push(id);

  await Promise.all(
    array.map(async (friend) => await User.findById(friend))
  ).then((response) => {
    const array = [];
    response.map((post) => {
      post.posts.forEach((p) => {
        postsArray.push(p);
      });
    });
  });

  await Promise.all(postsArray.map(async (post) => await Post.findById(post)))
    .then((response) => {
      return res.status(201).json(response);
    })
    .catch((err) => {
      return res.status(409).json(err);
    });
};

export const userFriends_Post = async (req, res) => {
  const friends = req.body;

  // wrapped in promise all in order to use map & return the array of data
  await Promise.all(
    friends.map(
      async (friend) => await User.findById(friend).select("-password")
    )
  )
    .then((response) => {
      return res.status(201).json(response);
    })
    .catch((err) => {
      return res.status(400).json({ err });
    });
};

export const userAddLikedPosts_Post = async (req, res) => {
  const { id } = req.params;
  const { _id: post } = req.body.post;
  const { likedPosts } = req.body.user;

  const alreadyLiked = likedPosts.includes(post);

  //if post id is already in likedPosts array pull it, if not push it

  if (alreadyLiked) {
    await User.findByIdAndUpdate(
      id,
      {
        $pull: { likedPosts: post },
      },
      { new: true }
    )
      .then((user) => {
        return res.status(201).json(user);
      })
      .catch((err) => {
        return res.status(409).json(err);
      });
  } else {
    await User.findByIdAndUpdate(
      id,
      {
        $addToSet: { likedPosts: post },
      },
      { new: true }
    )
      .then((user) => {
        return res.status(201).json(user);
      })
      .catch((err) => {
        return res.status(409).json(err);
      });
  }
};

export const getAllUsers_Get = async (req, res) => {
  const filter = {};
  const all = await User.find(filter);

  res.json(all);
};
