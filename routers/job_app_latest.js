import { job_app,job_app_dbfetch,job_app_display,job_app_display_update,job_app_insert,job_app_insert_basic,job_app_insert_edu,job_app_insert_lang,job_app_insert_pref,job_app_insert_ref,job_app_insert_tech,job_app_insert_work,job_app_update,job_app_update_basic,job_app_update_edu,job_app_update_lang,job_app_update_pref,job_app_update_ref,job_app_update_tech,job_app_update_work } from "../controller/job_app_latest.js";

import express from "express";

export const router = express.Router();

router.get("/", job_app);
router.get("/update", job_app_update);
router.get("/display", job_app_display);
router.get("/display/update", job_app_display_update);
router.post("/update/basic", job_app_update_basic);
router.post("/update/edu", job_app_update_edu);
router.post("/update/work", job_app_update_work);
router.post("/update/lang", job_app_update_lang);
router.post("/update/tech", job_app_update_tech);
router.post("/update/pref", job_app_update_pref);
router.post("/update/ref", job_app_update_ref);
router.get("/insert", job_app_insert);
router.get("/dbfetch", job_app_dbfetch);
router.post("/insert/basic", job_app_insert_basic);
router.post("/insert/edu", job_app_insert_edu);
router.post("/insert/work", job_app_insert_work);
router.post("/insert/tech", job_app_insert_tech);
router.post("/insert/lang", job_app_insert_lang);
router.post("/insert/ref", job_app_insert_ref);
router.post("/insert/pref", job_app_insert_pref);
