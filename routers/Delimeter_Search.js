import express from "express";
import { get_delimeter_search } from "../controller/get_delimeter_search.js";

export const router = express.Router();

router.get("/", get_delimeter_search);