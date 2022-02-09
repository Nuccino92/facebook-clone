import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { generateHash } from "../utils/passwords.js";

export const register_Post = async (req, res) => {
  try {
    const newUser = new User({
      email: "emaillls",
      password: generateHash("password123"),
      profile: [
        {
          firstName: "Billy",
          lastName: "Joe",
          bio: "",
          birthday: "Jan 9, 1992",
          gender: "Male",
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
        (err, token) => {
          if (err) throw err;
          res.status(201).json({
            token,
            user: {
              id: user.id,
              email: user.email,
              friends: user.friends,
              posts: user.posts,
              profile: user.profile,
            },
          });
        }
      );
    });
  } catch (err) {
    return res.json(err.message);
  }
};
