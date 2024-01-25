import { Schema, model } from "mongoose";

const MeetingSchema = new Schema(
    {
        meetingTitle: {
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
            type: [String],
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
