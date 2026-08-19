import { Attendance } from "../schema/attendance.schema.js";

export const attendanceRepository = {

    createAttendance: async (input) => {
        // Create the attendance document linked to an Employee ObjectId.
        return Attendance.create(input);
    },

    findTodayAttendance: async (employeeId) => {

        // Bound the query to the current day so records from other dates cannot be checked out accidentally.
        const start = new Date();
        start.setHours(0, 0, 0, 0);

        const end = new Date();
        end.setHours(23, 59, 59, 999);

        return Attendance.findOne({
            employee: employeeId,
            date: {
                $gte: start,
                $lte: end,
            },
        });
    },

    updateTodayAttendance: async (employeeId) => {

        // Reuse the date-bounded lookup, then calculate hours from the stored check-in and new checkout times.
        const attendance = await attendanceRepository.findTodayAttendance(employeeId);

        if (!attendance) {
            return null;
        }

        attendance.checkOut = new Date();

        const diff =
            attendance.checkOut.getTime() - attendance.checkIn.getTime();

        attendance.workingHours = Number(
            (diff / (1000 * 60 * 60)).toFixed(2)
        );

        return attendance.save();
    },

    getAttendanceHistory: async (employeeId) => {

        // Return the employee's records newest first for history views.
        return Attendance.find({
            employee: employeeId,
        }).sort({ date: -1 });

    },

    findAttendanceByEmployeeId: async (employeeId) => {

        // This query is used for employee-specific attendance history and is sorted chronologically backward.
        return Attendance.find({
            employee: employeeId
        }).sort({ date: -1 });

    }

};