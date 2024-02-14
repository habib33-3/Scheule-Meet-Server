import { Schema, model } from "mongoose";

const InviteSchema = new Schema(
    {
        invitedEmail: {
            type: String,
            required: true,
        },

        eventType: {
            type: String,
            enums: ["event", "meeting"],
        },
        eventId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        eventTitle: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },

        type: String,
        enum: ["accepted", "rejected", "pending"],
        // default: "pending",
    },
    {
        timestamps: true,
    }
);

export const Invite = model("invites", InviteSchema);
