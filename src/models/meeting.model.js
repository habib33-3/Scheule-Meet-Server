import { Schema, model } from "mongoose";

const MeetingSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        date: {
            type: Date,
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

        time: {
            type: String, //TODO: will replace with array of string
            required: true,
        },

        duration: {
            type: String,
            required: true,
        },

        meetingLink: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Meeting = model("meetings", MeetingSchema);
