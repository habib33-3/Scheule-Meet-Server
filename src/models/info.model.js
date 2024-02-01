import { Schema, model } from "mongoose";

const infoSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        roll: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Info = model("info", infoSchema);
