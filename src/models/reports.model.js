import { Schema, model } from "mongoose";

const ReportSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        reportedBy: {
            type: String,
            required: true,
        },
        reportedTo: {
            type: String,
            required: true,
        },
        reason: {
            type: String,
            required: true,
        },
        reportDate: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Report = model("reports", ReportSchema);
