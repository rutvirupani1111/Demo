import { jobapp_ajax,jobapp_ajax_dbfetch,jobapp_ajax_insert_basic,jobapp_ajax_insert_edu,jobapp_ajax_insert_lang,jobapp_ajax_insert_pref,jobapp_ajax_insert_ref,jobapp_ajax_insert_tech,jobapp_ajax_insert_work,jobapp_ajax_update,jobapp_ajax_update_basic,jobapp_ajax_update_edu,jobapp_ajax_update_lang,jobapp_ajax_update_pref,jobapp_ajax_update_ref,jobapp_ajax_update_tech,jobapp_ajax_update_work } from "../controller/job_app.js";

import express from "express";

export const router = express.Router();

router.get("/", jobapp_ajax);
router.get("/update", jobapp_ajax_update);
router.post("/update/basic", jobapp_ajax_update_basic);
router.post("/update/edu", jobapp_ajax_update_edu);
router.post("/update/work", jobapp_ajax_update_work);
router.post("/update/lang", jobapp_ajax_update_lang);
router.post("/update/tech", jobapp_ajax_update_tech);
router.post("/update/pref", jobapp_ajax_update_pref);
router.post("/update/ref", jobapp_ajax_update_ref);

router.get("/dbfetch", jobapp_ajax_dbfetch);
router.post("/insert/basic", jobapp_ajax_insert_basic);
router.post("/insert/edu", jobapp_ajax_insert_edu);
router.post("/insert/work", jobapp_ajax_insert_work);
router.post("/insert/tech", jobapp_ajax_insert_tech);
router.post("/insert/lang", jobapp_ajax_insert_lang);
router.post("/insert/ref", jobapp_ajax_insert_ref);
router.post("/insert/pref", jobapp_ajax_insert_pref);
