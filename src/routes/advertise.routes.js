import { Router } from "express";
import { getAds, postAdvert } from "../controller/advertise.controller.js";

const router = Router();

// routes for post ad
router.post("/post", postAdvert);

// routes for get ads
router.get("/get", getAds);

export default router;
