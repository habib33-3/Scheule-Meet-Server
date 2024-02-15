import { Schema, model } from "mongoose";

const TestimonialSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
        reviewerName: {
            type: String,
            required: true,
        },
        reviewerImg: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);


export const Testimonial = model("testimonials", TestimonialSchema);