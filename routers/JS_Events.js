import express from "express";
import { JS_Events } from "../controller/Js_Events.js";

export const router = express.Router();

router.get("/", JS_Events);