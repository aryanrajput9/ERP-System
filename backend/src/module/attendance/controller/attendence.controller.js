import { HTTP_STATUS } from "../../../constant/http-statuscode.js";
import { asyncHandler } from "../../../utils/async-hanlder.js";
import { attendanceServices } from "../services/attendence.services.js";
import { ApiResponse } from "../../../utils/api-respinse.js";
import { Attendance } from "../schema/attendance.schema.js";
import { Employee } from "../../../model/employe.model.js";
import { subDays } from "date-fns";

export const attendanceController = {

    createAttendance: asyncHandler(async (req, res) => {

        // Normalize the date to midnight so the attendance record represents the current calendar day.
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const input = {
            employee: req.employee._id,
            date: today,
            checkIn: new Date(),
            status: "Present",
            remarks: req.body.remarks
        };

        const attendance = await attendanceServices.createAttendanceServices(input);

        return res.status(HTTP_STATUS.CREATED).json(
            new ApiResponse(
                HTTP_STATUS.CREATED,
                "Check in successful",
                attendance
            )
        );
    }),

    checkOutController: asyncHandler(async (req, res) => {

        const employeeId = req.employee._id;

        const attendance = await attendanceServices.updateCheckInServices(employeeId);

        return res.status(HTTP_STATUS.OK).json(
            new ApiResponse(
                HTTP_STATUS.OK,
                "Check out successful",
                attendance
            )
        );
    }),

    getTodayAttendance: asyncHandler(async (req, res) => {

        const employeeId = req.employee._id;
        const attendance = await attendanceServices.getFindAttendance(employeeId);

        return res.status(HTTP_STATUS.OK).json(
            new ApiResponse(
                HTTP_STATUS.OK,
                "Today's attendance fetched successfully",
                attendance
            )
        );
    }),

    getAttendanceHistory: asyncHandler(async (req, res) => {

        const employeeId = req.employee._id;

        const attendance = await attendanceServices.getAttendanceHistoryServices(employeeId);

        return res.status(HTTP_STATUS.OK).json(
            new ApiResponse(
                HTTP_STATUS.OK,
                "Attendance history fetched successfully",
                attendance
            )
        );
    }),

    getAttendanceByEmployeeId: asyncHandler(async (req, res) => {

        const { employeeId } = req.params;

        const attendance = await attendanceServices.findAttendanceById(employeeId);

        return res.status(HTTP_STATUS.OK).json(
            new ApiResponse(
                HTTP_STATUS.OK,
                "Employee attendance fetched successfully",
                attendance
            )
        );
    }),
    getAllEmployeeAttendence: asyncHandler(async (_req, res) => {


        // Build a dashboard view by joining each employee to only today's attendance records.
        const today = new Date();

        today.setHours(0, 0, 0, 0);

        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1)

        const allattendence = await Employee.aggregate([
            // The dashboard is limited to employees rather than managers or HR users.
            {
                $match: { role: "Employee" }
            },
            {
                // Match attendance through the employee ObjectId and the normalized day range.
                $lookup: {
                    from: "attendances",
                    let: { empId: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $and: [
                                        { $eq: ["$employee", "$$empId"] },
                                        { $gte: ["$date", today] },
                                        { $lt: ["$date", tomorrow] }
                                    ]
                                }
                            }
                        }
                    ],
                    as: "todayAttendance"
                }
            },
            {
                $project: {
                    _id: 1,
                    employeeId: 1,
                    firstName: 1,
                    email: 1,
                    profileImage: 1,
                    department: 1,
                    designation: 1,
                    employmentType: 1,
                    role: 1,
                    todayAttendance: 1
                }
            }
        ])

        return res.status(200).json(
            allattendence
        )
    }),
    getAllEmployeeAttendenceHistory: asyncHandler(async (_req, res) => {

        // Testing ke liye existing attendance data ka range
        const start = new Date("2026-08-04T00:00:00.000Z");
        const end = new Date("2026-08-16T23:59:59.999Z");

        const totalEmployees = await Employee.countDocuments({
            isActive: true,
        });

        const attendance = await Attendance.aggregate([
            {
                $match: {
                    date: {
                        $gte: start,
                        $lte: end,
                    },
                },
            },

            {
                $group: {
                    _id: {
                        $dateToString: {
                            format: "%Y-%m-%d",
                            date: "$date",
                        },
                    },

                    present: {
                        $sum: {
                            $cond: [
                                { $eq: ["$status", "Present"] },
                                1,
                                0,
                            ],
                        },
                    },

                    absent: {
                        $sum: {
                            $cond: [
                                { $eq: ["$status", "Absent"] },
                                1,
                                0,
                            ],
                        },
                    },

                    leave: {
                        $sum: {
                            $cond: [
                                { $eq: ["$status", "Leave"] },
                                1,
                                0,
                            ],
                        },
                    },
                },
            },

            {
                $sort: {
                    _id: 1,
                },
            },
        ]);

        const result = attendance.map((item) => ({
            date: item._id,
            totalEmployees,
            present: item.present,
            absent: item.absent,
            leave: item.leave,

            percentage: totalEmployees
                ? Math.round((item.present / totalEmployees) * 100)
                : 0,
        }));


        return res.status(200).json({
            message: "Attendance history",
            attendance: result,
        });
    })

};