import jwt from "jsonwebtoken";
import User from "../models/User.js";

import { generateHash } from "../utils/passwords.js";

export const register_Post = async (req, res) => {
  const { email, password, firstName, lastName, bio, birthday, gender } =
    req.body;
  try {
    const newUser = new User({
      email,
      password: generateHash(password),
      friends: [],
      posts: [],
      profile: [
        {
          firstName,
          lastName,
          bio,
          birthday,
          gender,
        },
      ],
    });

    await newUser.save().then((user) => {
      jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_SECRET,
        // 24 hours
        { expiresIn: 86400 },
        async (err, token) => {
          if (err) throw err;
          await User.findById(user.id)
            .select("-password")
            .then((user) => {
              res.status(201).json({ token, user });
            });
        }
      );
    });
  } catch (err) {
    return res.json(err.message);
  }
};
