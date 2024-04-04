import { Detail_Search } from "../controller/Detail_Search.js";
import express from "express";

export const router = express.Router();

router.get("/", Detail_Search);