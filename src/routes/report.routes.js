import { Router } from "express";
import {
    acceptReport,
    addReport,
    deleteReport,
    getReport,
    getReports,
} from "../controller/reports.controller.js";
import verifyToken from "../middlewares/verifyToken.middleware.js";
import verifyAdmin from "../middlewares/verifyAdmin.middleware.js";

const router = Router();

// route for add report
router.post("/addReport", verifyToken, addReport);

// route for delete report
router.delete("/deleteReport/:id", verifyToken, verifyAdmin, deleteReport);

// route for accept report
router.post("/accept/:id", verifyToken, verifyAdmin, acceptReport);

// route for get all reports
router.get("/getReports", verifyToken, verifyAdmin, getReports);

// route for get single report
router.get("/getReport/:id", verifyToken, verifyAdmin, getReport);

export default router;
