import { Router } from "express";
import { addReport, deleteReport } from "../controller/reports.controller";

const router = Router();

// route for add report
router.post("/addReport", addReport);

// route for delete report
router.delete("/deleteReport/:id", deleteReport);
export default Router;
