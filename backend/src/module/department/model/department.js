import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema(
    {
        name: {
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
        },

        manager: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "employee",
            default: null,
        },

        isActive: {
            type: Boolean,
            default: true,
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "employee",
        },
    },
    {
        timestamps: true,
    }
);

const Department = mongoose.model("Department", departmentSchema);

export default Department;