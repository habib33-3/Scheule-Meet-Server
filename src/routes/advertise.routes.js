import { Router } from "express";
import {
    checkIfAdvertised,
    getAds,
    postAdvert,
} from "../controller/advertise.controller.js";
import verifyToken from "../middlewares/verifyToken.middleware.js";

const router = Router();

// routes for post ad
router.post("/post", verifyToken, postAdvert);

// routes for get ads
router.get("/get", getAds);

// routes to check if advertised
router.get("/check/:eventId", checkIfAdvertised);

export default router;
