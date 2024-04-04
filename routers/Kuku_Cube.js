import { Kuku_Cube } from "../controller/Kuku_Cube.js";
import express from "express";

export const router = express.Router();

router.get("/", Kuku_Cube);