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
