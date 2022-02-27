import express from "express";
import passport from "passport";
import auth_Get from "../controllers/auth.js";

const router = express.Router();

const auth = passport.authenticate("jwt", { session: false });

router.get("/", auth, auth_Get);

export default router;
