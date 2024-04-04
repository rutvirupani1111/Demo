import { Tasks } from "../controller/Tasks.js";
import express from "express";

export const router = express.Router();

router.get("/", Tasks);
