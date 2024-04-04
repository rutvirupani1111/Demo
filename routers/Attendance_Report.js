import express from "express";
import { get_attendance_report } from "../controller/get_attendance_report.js";

export const router = express.Router();

router.get("/", get_attendance_report);