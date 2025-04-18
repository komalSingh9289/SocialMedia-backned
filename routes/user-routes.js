import express from "express";
import clerkAuth from "../middlewares/clerkAuth.js";
import { adduser } from "../controllers/user-controllers.js";

const router = express.Router();

router.post('/',clerkAuth, adduser);

export default router;