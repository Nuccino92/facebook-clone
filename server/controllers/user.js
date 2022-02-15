import User from "../models/User.js";

export const user_Get = async (req, res) => {
  const { id } = req.params;

  await User.findById(id)
    .select("-password")
    .then((response) => {
      console.log(response);
      res.status(201).json({ response });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ err });
    });
};
