import mongoose from "mongoose";

const leaveSchema = new mongoose.Schema(
    {
        employee: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Employee",
            required: true,
        },

        leaveType: {
            type: String,
            enum: ["Casual", "Sick", "Earned"],
            required: true,
        },

        startDate: {
            type: Date,
            required: true,
        },

        endDate: {
            type: Date,
            required: true,
        },

        totalDays: {
            type: Number,
            required: true,
        },

        reason: {
            type: String,
            required: true,
            trim: true,
        },

        status: {
            type: String,
            enum: ["Pending", "Approved", "Rejected"],
            default: "Pending",
        },

        approvedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Employee",
            default: null,
        },

        rejectionReason: {
            type: String,
            default: "",
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Leave = mongoose.model("Leave", leaveSchema);