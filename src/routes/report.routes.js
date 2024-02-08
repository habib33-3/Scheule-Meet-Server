import { Router } from "express";
import {
    acceptReport,
    addReport,
    deleteReport,
    getReport,
    getReports,
} from "../controller/reports.controller.js";

const router = Router();

// route for add report
router.post("/addReport", addReport); //TODO: verify token will be added

// route for delete report
router.delete("/deleteReport/:id", deleteReport); //TODO: verify token and verify admin will be added

// route for accept report
router.post("/accept/:id", acceptReport); //TODO: verify token and verify admin will be added

// route for get all reports
router.get("/getReports", getReports); //TODO: verify token and verify admin will be added

// route for get single report
router.get("/getReport/:id", getReport); //TODO: verify token and verify admin will be added

export default router;
