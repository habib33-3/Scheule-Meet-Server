import { Schema, model } from "mongoose";

const EventSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },

        hostName: {
            type: String,
            required: true,
        },

        hostEmail: {
            type: String,
            required: true,
        },

        image: {
            type: String,
            required: true,
        },
        duration: {
            type: String,
            required: true,
        },

        capacity: {
            type: Number,
            default: 1000,
        },

        date: {
            type: Date,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        time: {
            type: String, 
            required: true,
        },

        link: {
            type: String,
            required: true,
        },

        isPremium: {
            type: Boolean,
            default: false,
        },

        fee: {
            type: Number,
            default: 0,
        },

        isPublic: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

export const Event = model("events", EventSchema);
