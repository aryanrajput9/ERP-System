import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema(
    {
        // Names and codes are unique business identifiers; codes are normalized to uppercase.
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
            // References preserve the relationship to the employee who manages this department.
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