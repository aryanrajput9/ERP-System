import id from "zod/v4/locales/id.cjs";
import { Leave } from "../model/leave.model.js";


const leaveRepository = {
    createLeave: async (input) => {
        // Persist the leave with its employee ObjectId and calculated duration.
        return await Leave.create(input);
    },

    // employee ki sabhi leaves
    // Sort an employee's requests newest first for self-service history.
    getLeavesByEmployeeId: async (employeeId) => {
        return await Leave.find({ employee: employeeId }).sort({ createdAt: -1 });
    },

    // single leave
    // Populate employee and approver references so the detail view has display fields.
    getLeaveById: async (id) => {
        return await Leave.findById(id)
            .populate("employee", "name email")
            .populate("approvedBy", "name email");
    },

    // approve
    // Store both the status transition and the approving employee reference.
    approveLeaveById: async (id, approvedBy) => {
        return await Leave.findByIdAndUpdate(
            id,
            {
                status: "Approved",
                approvedBy,
            },
            { returnDocument: "after" }
        );
    },

    // reject
    // Store the rejection transition and its reason for auditability.
    rejectLeave: async (id, reason) => {
        return await Leave.findByIdAndUpdate(
            id,
            {
                status: "Rejected",
                rejectionReason: reason,
            },
            { new: true }
        );
    },
    getAllLeave: async () => {
        // Populate only the employee profile fields needed by the leave overview.
        const allleave = await Leave.find().populate(
            "employee", "firstName lastName   profileImage"
        );
        return allleave
    }
};


export default leaveRepository