import express from "express";
import { get_dynamic_query } from "../controller/get_dynamic_query.js";

export const router = express.Router();

router.get("/", get_dynamic_query);