import express from "express";
import { get_result_report,get_result_report_attdetails } from "../controller/get_result_report.js";
// import { get_result_report_attdetails } from "../controller/get_result_report.js";

export const router = express.Router();

router.get("/", get_result_report);
router.get("/AttDetails", get_result_report_attdetails);