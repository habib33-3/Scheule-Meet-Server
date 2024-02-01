import { Router } from "express";

import { createInfo,getInfo,deleteInfo } from "../controller/info.controller.js";

const router = Router();

// route for create event
router.post("/createInfo", createInfo); //TODO: private route
router.get("/allinfo", getInfo)
router.delete('/deleteInfo/:id', deleteInfo)
export default router;
