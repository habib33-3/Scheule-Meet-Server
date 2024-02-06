import { Router } from "express";
import { addReport } from "../controller/reports.controller";

const router=Router()


// route for add report
router.post("/addReport",addReport)


export default Router