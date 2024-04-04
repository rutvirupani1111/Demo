import express from "express";
import { post_login,get_login } from "../controller/login.js";

export const router = express.Router();

router.get('/', get_login);
router.post('/',post_login);

