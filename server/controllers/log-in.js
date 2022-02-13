import jwt from "jsonwebtoken";
import passport from "passport";
import User from "../models/User.js";

export const logIn_Post = async (req, res, next) => {
  const { email, password } = req.body;

  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (!email) {
      return res.status(400).json({
        message: "Please enter an email",
        param: "email",
      });
    }

    if (!password) {
      return res.status(400).json({
        message: "Please enter password",
        param: "password",
      });
    }

    if (err) {
      return res.status(400).json({
        message: err.message,
      });
    }
    if (!user) {
      return res.status(400).json({
        message: "You entered the incorrect information",
        user: user,
        param: null,
      });
    }

    req.login(user, { session: false }, (err) => {
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
  })(req, res, next);
};
