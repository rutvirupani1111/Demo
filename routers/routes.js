import { router as Registration } from "./Registration.js";
import { router as Job_App } from "./job_app.js";
import { router as Job_App2 } from "./job_app_latest.js";
import { router as Delimeter_Search } from "./Delimeter_Search.js";
import { router as Attendance } from "./Attendance_Report.js";
import { router as Result } from "./Result_Report.js";
import { router as Login } from "./Login.js";
import { router as Dynamic_Query } from "./Dynamic_Query.js";
import { router as Kuku_Cube } from "./Kuku_Cube.js";
import { router as Tic_Tac_Toe } from "./Tic_Tac_Toe.js";
import  { router as Tasks} from "./Tasks.js";
import { router as Detail_Search} from "./Detail_Search.js";
import { router as Sorting } from "./Sorting.js";
import { router as JS_Events } from "./JS_Events.js";
import { router as Dyamotbl } from "./Dynamic_Table.js"

import express from "express";

export const router = express.Router();
router.use("/", Registration);
router.use("/login", Login);
router.use("/delimeter_search", Delimeter_Search);
router.use("/jobapp_ajax", Job_App);
router.use("/job_app",Job_App2);
router.use("/result_report", Result);
router.use("/attendance_report", Attendance);
router.use("/dynamic_query", Dynamic_Query);

router.use("/jsevents", JS_Events);
router.use("/Tasks", Tasks);
router.use("/sorting", Sorting);
router.use("/search_detail", Detail_Search);
router.use("/kuku", Kuku_Cube);
router.use("/t3", Tic_Tac_Toe);
router.use("/dynamo", Dyamotbl);
