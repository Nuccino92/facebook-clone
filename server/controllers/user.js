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

// get data of friends from database user.friends
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

// get all users in database
export const getAllUsers_Get = async (req, res) => {
  const filter = {};
  const all = await User.find(filter);

  res.json(all);
};

export const userSendFriendRequest_Post = async (req, res) => {
  const { sender, recipient } = req.body;

  const newRecipient = {
    type: "recipient",
    sender: sender,
  };

  const newSender = {
    type: "sender",
    recipient: recipient,
  };

  const promise1 = await User.findByIdAndUpdate(
    recipient._id,
    {
      $addToSet: { friendRequests: newRecipient },
    },
    { new: true }
  );

  const promise2 = await User.findByIdAndUpdate(
    sender._id,
    {
      $addToSet: { friendRequests: newSender },
    },
    { new: true }
  );

  await Promise.all([promise1, promise2])
    .then((response) => {
      return res.status(201).json(response);
    })
    .catch((err) => {
      return res.json(500).json(err);
    });
};

export const rejectFriendRequest_Post = async (req, res) => {
  const { user, rejectedUser } = req.body;

  //finds rejected users request
  const findRejectedUser = user.friendRequests.find((request) => {
    return request.type === "sender"
      ? request.recipient._id === rejectedUser._id
      : request.sender._id === rejectedUser._id;
  });

  // find users request
  const findUser = rejectedUser.friendRequests.find((request) => {
    return request.type === "sender"
      ? request.recipient._id === user._id
      : request.sender._id === user._id;
  });

  const promise1 = await User.findByIdAndUpdate(
    user._id,
    {
      $pull: { friendRequests: findRejectedUser },
    },
    {
      new: true,
    }
  );

  const promise2 = await User.findByIdAndUpdate(
    rejectedUser._id,
    {
      $pull: { friendRequests: findUser },
    },
    {
      new: true,
    }
  );

  await Promise.all([promise1, promise2])
    .then((response) => {
      return res.status(201).json(response);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

export const acceptFriendRequest_Post = async (req, res) => {
  const { user, acceptedUser } = req.body;

  // find accepted users request
  const findAcceptedUser = user.friendRequests.find((request) => {
    return request.type === "sender"
      ? request.recipient._id === acceptedUser._id
      : request.sender._id === acceptedUser._id;
  });

  // finds users request
  const findUser = acceptedUser.friendRequests.find((request) => {
    return request.type === "sender"
      ? request.recipient._id === user._id
      : request.sender._id === user._id;
  });

  const promise1 = await User.findByIdAndUpdate(
    user._id,
    {
      $pull: { friendRequests: findAcceptedUser },
      $addToSet: { friends: acceptedUser._id },
    },
    {
      new: true,
    }
  );

  const promise2 = await User.findByIdAndUpdate(
    acceptedUser._id,
    {
      $pull: { friendRequests: findUser },
      $addToSet: { friends: user._id },
    },

    {
      new: true,
    }
  );

  await Promise.all([promise1, promise2])
    .then((response) => {
      return res.status(201).json(response);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};
