import { Router } from "express";
import {
    checkIfAdvertised,
    getAds,
    postAdvert,
} from "../controller/advertise.controller.js";

const router = Router();

// routes for post ad
router.post("/post", postAdvert);

// routes for get ads
router.get("/get", getAds);

// routes to check if advertised
router.get("/check/:eventId", checkIfAdvertised);

export default router;
