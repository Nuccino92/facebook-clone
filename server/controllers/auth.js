import User from "../models/User.js";

export const auth_Get = (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => {
      res.status(200).json(user);
    });
};

export default auth_Get;
