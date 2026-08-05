import { attendanceRepository } from "../repository/attendence.repository.js";
import { HTTP_STATUS } from "../../../constant/http-statuscode.js";
import { ApiError } from "../../../utils/api-error.js";

export const attendanceServices = {

    createAttendanceServices: async (input) => {
        return attendanceRepository.createAttendance(input);
    },

    updateCheckInServices: async (employeeId, date, data) => {

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

        if (!employeeId) {
            throw new ApiError(
                HTTP_STATUS.BAD_REQUEST,
                "Employee id is required"
            );
        }

        return attendanceRepository.getAttendanceHistory(employeeId);
    },

    findAttendanceById: async (employeeId) => {

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