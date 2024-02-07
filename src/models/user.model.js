import { Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
            required: true,
        },
        img: {
            type: String,
        },
        role: {
            type: String,
            default: "user",
        },
    },
    {
        timestamps: true,
    }
);

export const User = model("users", UserSchema);
