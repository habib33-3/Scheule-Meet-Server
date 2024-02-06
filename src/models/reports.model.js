const { Schema, model } = require("mongoose");

const ReportSchema = new Schema(
    {
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
