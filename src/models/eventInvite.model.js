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

export const eventInvite = model("eventInvites", InviteSchema);
