import { Schema, model } from "mongoose";

const attendanceSchema = new Schema(
    {
        employee: {
            type: Schema.Types.ObjectId,
            ref: "Employee",
            required: true,
        },

        date: {
            type: Date,
            required: true,
        },

        checkIn: {
            type: Date,
            default: null,
        },

        checkOut: {
            type: Date,
            default: null,
        },

        workingHours: {
            type: Number,
            default: 0,
        },

        status: {
            type: String,
            enum: [
                "Present",
                "Absent",
                "Leave",
                "Half-Day",
            ],
            default: "Present",
        },

        remarks: {
            type: String,
            trim: true,
            default: "",
        },

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export const Attendance = model("Attendance", attendanceSchema);