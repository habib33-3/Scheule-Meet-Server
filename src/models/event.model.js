import { Schema, model } from "mongoose";

const EventSchema = new Schema(
    {
        eventTitle: {
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

        date: {
            type: Date,
            required: true,
        },

        time: {
            type: String, //TODO: will replace with array of string
            required: true,
        },
        eventLink: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Event = model("events", EventSchema);
