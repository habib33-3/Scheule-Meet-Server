import { Schema, model } from "mongoose";

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    titleImg: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    writer: {
        type: String,
        required: true,
    },
    writerImg: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    date: {
        type: String,
    },
});

export const blogModel = model("blogs", blogSchema);
