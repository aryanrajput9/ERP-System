import { Attendance } from "../schema/attendance.schema.js";

export const attendanceRepository = {

    createAttendance: async (input) => {
        return Attendance.create(input);
    },

    findTodayAttendance: async (employeeId) => {

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

        return Attendance.find({
            employee: employeeId,
        }).sort({ date: -1 });

    },

    findAttendanceByEmployeeId: async (employeeId) => {

        return Attendance.find({
            employee: employeeId
        }).sort({ date: -1 });

    }

};