import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        // Task title
        title: {
            type: String,
            required: true,
            trim: true,
        },

        // Full task details
        description: {
            type: String,
            default: "",
        },

        // Kis employee ko assign hua
        // Store the employee responsible for completing the task as an ObjectId reference.
        assignedTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Employee",
            required: true,
        },

        // Kisne task create kiya (Admin/Manager)
        // Store the creator identity used by the current task workflow.
        createdBy: {
            type: String,
            ref: "Employee",
            required: true,
        },

        // Priority
        priority: {
            type: String,
            enum: ["Low", "Medium", "High"],
            default: "Medium",
        },

        // Current status
        status: {
            type: String,
            enum: ["Pending", "In Progress", "Completed"],
            default: "Pending",
        },

        // Start date
        startDate: {
            type: Date,
        },

        // Deadline
        dueDate: {
            type: Date,
        },

        // Completion date
        completedAt: {
            type: Date,
        },

        // Estimated work hours
        estimatedHours: {
            type: Number,
            default: 0,
        },

        // Optional tags
        tags: [
            {
                type: String,
            },
        ],

        // Active or deleted
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Task", taskSchema);