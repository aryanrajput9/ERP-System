import id from "zod/v4/locales/id.cjs";
import { HTTP_STATUS } from "../../../constant/http-statuscode.js";
import { ApiError } from "../../../utils/api-error.js";
import leaveRepository from "../repository/leave.repositorry.js";



const leaveServices = {

    createLeave: async (input) => {

        const start = new Date(input.startDate);
        const end = new Date(input.endDate);

        // Reject reversed ranges, then count both boundary dates as leave days.
        if (start > end) {
            throw new ApiError(400, "Start date cannot be after end date");
        }

        // total days calculate
        const diffTime = end - start;

        input.totalDays =
            Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;

        return await leaveRepository.createLeave(input);
    },

    // employee ki sabhi leaves
    // Return only the leave records owned by the requested employee.
    getLeavesByEmployeeId: async (employeeId) => {

        if (!employeeId) {
            throw new ApiError(400, "Employee id is required");
        }

        return await leaveRepository.getLeavesByEmployeeId(employeeId);
    },

    // single leave detail
    // Fetch one leave and convert a missing document into a 404 service error.
    getLeaveById: async (id) => {

        if (!id) {
            throw new ApiError(400, "Leave id is required");
        }

        const leave = await leaveRepository.getLeaveById(id);

        if (!leave) {
            throw new ApiError(404, "Leave not found");
        }

        return leave;
    },

    // approve
    // Mark the request approved and retain the employee who approved it.
    approveLeaveById: async (id, approvedBy) => {

        if (!id) {
            throw new ApiError(400, "Leave id is required");
        }

        const leave = await leaveRepository.approveLeaveById(id, approvedBy);

        if (!leave) {
            throw new ApiError(404, "Leave not found");
        }

        return leave;
    },

    // reject
    // Require an explanation before changing the request to Rejected.
    rejectLeave: async (id, reason) => {

        if (!id) {
            throw new ApiError(400, "Leave id is required");
        }

        if (!reason) {
            throw new ApiError(400, "Rejection reason is required");
        }

        const leave = await leaveRepository.rejectLeave(id, reason);

        if (!leave) {
            throw new ApiError(404, "Leave not found");
        }

        return leave;
    }
};
export default leaveServices