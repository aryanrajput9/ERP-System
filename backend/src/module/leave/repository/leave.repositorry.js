import id from "zod/v4/locales/id.cjs";
import { Leave } from "../model/leave.model.js";


const leaveRepository = {
    createLeave: async (input) => {
        return await Leave.create(input);
    },

    // employee ki sabhi leaves
    getLeavesByEmployeeId: async (employeeId) => {
        return await Leave.find({ employee: employeeId }).sort({ createdAt: -1 });
    },

    // single leave
    getLeaveById: async (id) => {
        return await Leave.findById(id)
            .populate("employee", "name email")
            .populate("approvedBy", "name email");
    },

    // approve
    approveLeaveById: async (id, approvedBy) => {
        return await Leave.findByIdAndUpdate(
            id,
            {
                status: "Approved",
                approvedBy,
            },
            { new: true }
        );
    },

    // reject
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
};


export default leaveRepository