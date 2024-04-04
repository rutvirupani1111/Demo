import express from "express";
import { Tic_Tac_Toe } from "../controller/Tic_Tac_Toe.js";

export const router = express.Router();

router.get("/", Tic_Tac_Toe);