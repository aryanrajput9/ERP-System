import { Schema, model, Types } from 'mongoose';
import bcryptjs from 'bcryptjs'
import { env } from '../config/env.js';
import { randomUUID } from "crypto";


const employeeSchema = new Schema(
    {
        employeeId: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },

        firstName: {
            type: String,
            required: true,
            trim: true,
        },

        lastName: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        phone: {
            type: String,
            required: true,
            trim: true,
        },

        password: {
            type: String,
            required: true,
            select: false,
        },

        gender: {
            type: String,
            enum: ["Male", "Female", "Other"],
            required: true,
        },

        dateOfBirth: {
            type: Date,
            required: true,
        },

        profileImage: {
            type: String,
            default: "",
        },

        department: {
            type: Schema.Types.ObjectId,
            ref: "department",
            default: null
        },

        designation: {
            type: Schema.Types.ObjectId,
            ref: "designation",
            default: null
        },

        salary: {
            type: Number,
            required: true,
            min: 0,
        },

        joiningDate: {
            type: Date,
            default: Date.now,
        },

        employmentType: {
            type: String,
            enum: ["Full-Time", "Part-Time", "Intern", "Contract"],
            default: "Full-Time",
        },

        role: {
            type: String,
            enum: ["Admin", "Manager", "HR", "Employee"],
            default: "Employee",
        },

        address: {
            type: String,
            required: true,
        },

        city: String,

        state: String,

        country: String,

        pincode: String,

        isActive: {
            type: Boolean,
            default: true,
        },

        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

employeeSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return next();
    }

    this.password = await bcryptjs.hash(
        this.password,
        env.saltRound
    );

});



employeeSchema.methods.comparepassword = function (password) {
    return bcryptjs.compare(password, this.password)
}


export const Employee = model("Employee", employeeSchema);