import { Testimonial } from "../models/testimonial.model.js";

const addTestimonial = async (req, res) => {
    try {
        const testimonial = req.body;

        await Testimonial.create(testimonial);

        res.status(200).json({
            message: "testimonial added",
            success: true,
        });
    } catch (error) {
        console.log("server error during add testimonial", error);
        res.status(500).json({
            message: "server error during add testimonial",
            success: false,
        });
    }
};

const getTestimonial = async (req, res) => {
    try {
        const testimonials = await Testimonial.find();

        res.status(200).json({
            message: "testimonial loaded",
            success: true,
            testimonials,
        });
    } catch (error) {
        console.log("server error during get testimonial", error);
        res.status(500).json({
            message: "server error during get testimonial",
            success: false,
        });
    }
};

export { addTestimonial, getTestimonial };
