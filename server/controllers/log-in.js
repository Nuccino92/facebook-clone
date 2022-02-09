import jwt from "jsonwebtoken";
import passport from "passport";

export const logIn_Post = async (req, res, next) => {
  const { email, password } = req.body;

  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err) {
      return res.status(400).json({
        message: err.message,
      });
    }
    if (!user) {
      return res.status(400).json({
        message: "You entered the incorrect information",
        user: user,
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
        (err, token) => {
          if (err) throw err;
          res.status(400).json({
            token,
            user: {
              id: user.id,
              email: user.email,
              username: user.username,
            },
          });
        }
      );
    });
  })(req, res, next);
};
