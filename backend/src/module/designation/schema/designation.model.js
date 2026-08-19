import mongoose from "mongoose";

const designationSchema = new mongoose.Schema(
    {
        // Titles and uppercase codes are unique business identifiers for employee roles.
        title: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },

        code: {
            type: String,
            required: true,
            trim: true,
            uppercase: true,
            unique: true,
        },

        description: {
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

export const Designation = mongoose.model(
    "Designation",
    designationSchema
);