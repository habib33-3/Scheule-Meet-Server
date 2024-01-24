import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "user",
    },
});

export const User = model("users", UserSchema);
