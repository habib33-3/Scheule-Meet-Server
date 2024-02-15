import { Router } from "express";
import {
    addTestimonial,
    getTestimonial,
} from "../controller/testimonial.controller.js";

const router = Router();

router.post("/add", addTestimonial);

router.get("/get", getTestimonial);

export default router;
