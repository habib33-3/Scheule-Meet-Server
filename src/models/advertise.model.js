import { Schema, model } from "mongoose";

const AdvertiseSchema = new Schema(
    {
        eventId: {
            type: Schema.Types.ObjectId,
            ref: "events",
            required: true,
        },
        expiresIn: {
            type: Date,
            expires: 0,
            // required: true,
        },
        tag: {
            type: String,
        },
        thumbnail: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Advertisement = model("advertisements", AdvertiseSchema);
