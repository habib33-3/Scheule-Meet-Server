import { Schema, model } from "mongoose";

const BannedUserSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    bannedBy: {
        type: String,
        required: true,
    },

    reason: {
        type: String,
        required: true,
    },

    bannedFrom: {
        type: Date,
        required: true,
    },
},
{
    timestamps: true,
});

export const BannedUsers = model("bannedUser", BannedUserSchema);
