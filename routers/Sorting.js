import { Sorting } from "../controller/Sorting.js";
import express from "express";

export const router = express.Router();

router.get("/", Sorting);