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

        city: {
            type: String,
            default: "",
        },
        country: {
            type: String,
            default: "",
        },

        twitter: {
            type: String,
            default: "www.x.com",
        },
        facebook: {
            type: String,
            default: "www.facebook.com",
        },
        instagram: {
            type: String,
            default: "www.instagram.com",
        },
        linkedin: {
            type: String,
            default: "www.linkedin.com",
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
