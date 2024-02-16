import { Schema, model } from "mongoose";

const EventSchema = new Schema(
    {
        eventTitle: {
            type: String,
            required: true,
        },

        // hostName: {
        //     type: String,
        //     required: true,
        // },

        // hostEmail: {
        //     type: String,
        //     required: true,
        // },

        image: {
            type: String,
            required: true,
        },
        duration: {
            type: String,
            required: true,
        },

        // capacity: {
        //     type: Number,
        //     default: 1000,
        // },

        date: {
            type: Date,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        time: {
            type: String, //TODO: will replace with array of string
            required: true,
        },
        
        // link: {
        //     type: String,
        //     required: true,
        // },
    },
    {
        timestamps: true,
    }
);

export const Event = model("events", EventSchema);
