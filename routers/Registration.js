import { get_createpswhlink,post_Registration,post_createpswhlink,get_Registration } from "../controller/Registration.js";
import express from "express";

export const router = express.Router();

router.get("/",get_Registration);
router.post("/",post_Registration);
router.get("/createpsw/:hlink",get_createpswhlink);
router.post("/createpsw/:hlink", post_createpswhlink);