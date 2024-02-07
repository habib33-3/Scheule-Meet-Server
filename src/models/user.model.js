import { Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        name: {
            type: String,
            default: "",
        },
        email: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            default: "",
        },
        role: {
            type: String,
            default: "user",
        },
        banned: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

export const User = model("users", UserSchema);
