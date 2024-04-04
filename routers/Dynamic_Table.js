import express from "express";
import { dynamotbl } from "../controller/Dynamic_Table.js";

export const router = express.Router();

router.get("/", dynamotbl);