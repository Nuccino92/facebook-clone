import express from "express";
import passport from "passport";
import auth_Get from "../controllers/auth.js";

const router = express.Router();

router.get("/", passport.authenticate("jwt", { session: false }), auth_Get);

export default router;
