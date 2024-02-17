import { Schema, model } from "mongoose";

const InviteSchema = new Schema(
    {
        invitedEmail: {
            type: String,
            required: true,
        },

        inviteeEmail: {
            type: String,
            required: true,
        },

        hostName: {
            type: String,
            
        },
        // eventType: {
        //     type: String,
        //     enum: ["event", "meeting"],
        // },
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
        status: {
            type: String,
            enum: ["accepted", "rejected", "pending"],
            default: "pending",
        },
    },
    {
        timestamps: true,
    }
);

export const Invite = model("invites", InviteSchema);
