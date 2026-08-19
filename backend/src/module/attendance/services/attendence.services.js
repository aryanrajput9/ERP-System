import { attendanceRepository } from "../repository/attendence.repository.js";
import { HTTP_STATUS } from "../../../constant/http-statuscode.js";
import { ApiError } from "../../../utils/api-error.js";

export const attendanceServices = {

    createAttendanceServices: async (input) => {
        // The controller supplies the authenticated employee and check-in timestamp; the repository persists it.
        return attendanceRepository.createAttendance(input);
    },

    updateCheckInServices: async (employeeId, date, data) => {

        // Validate identity before allowing a checkout mutation for today's record.
        if (!employeeId) {
            throw new ApiError(
                HTTP_STATUS.BAD_REQUEST,
                "Employee id is required"
            );
        }

        const attendance = await attendanceRepository.updateTodayAttendance(
            employeeId,
            date,
            data
        );

        if (!attendance) {
            throw new ApiError(
                HTTP_STATUS.NOT_FOUND,
                "Attendance not found"
            );
        }

        return attendance;
    },

    getFindAttendance: async (employeeId) => {

        // A missing record is reported distinctly so callers know the employee has not checked in today.
        if (!employeeId) {
            throw new ApiError(
                HTTP_STATUS.BAD_REQUEST,
                "Employee id is required"
            );
        }

        const attendance = await attendanceRepository.findTodayAttendance(employeeId);

        if (!attendance) {
            throw new ApiError(
                HTTP_STATUS.NOT_FOUND,
                "Today's attendance not found"
            );
        }

        return attendance;
    },

    getAttendanceHistoryServices: async (employeeId) => {

        // History is always scoped to the authenticated employee ID passed by the controller.
        if (!employeeId) {
            throw new ApiError(
                HTTP_STATUS.BAD_REQUEST,
                "Employee id is required"
            );
        }

        return attendanceRepository.getAttendanceHistory(employeeId);
    },

    findAttendanceById: async (employeeId) => {

        // Reject empty lookups before querying MongoDB and distinguish an empty result from bad input.
        if (!employeeId) {
            throw new ApiError(
                HTTP_STATUS.BAD_REQUEST,
                "Employee id is required"
            );
        }

        const attendance = await attendanceRepository.findAttendanceByEmployeeId(employeeId);

        if (!attendance) {
            throw new ApiError(
                HTTP_STATUS.NOT_FOUND,
                "Attendance not found"
            );
        }

        return attendance;
    }

};