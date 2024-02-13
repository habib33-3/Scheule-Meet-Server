import { Schema, model } from "mongoose";

const MeetingSchema = new Schema(
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

        date: {
            type: Date,
            required: true,
        },

        time: {
            type: String, //TODO: will replace with array of string
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Meeting = model("meetings", MeetingSchema);
