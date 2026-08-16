import { HTTP_STATUS } from "../../../constant/http-statuscode.js";
import { asyncHandler } from "../../../utils/async-hanlder.js";
import { attendanceServices } from "../services/attendence.services.js";
import { ApiResponse } from "../../../utils/api-respinse.js";
import { Attendance } from "../schema/attendance.schema.js";
import { Employee } from "../../../model/employe.model.js";

export const attendanceController = {

    createAttendance: asyncHandler(async (req, res) => {

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
    getAllEmployeeAttendence: asyncHandler(async (req, res) => {


        const today = new Date();

        today.setHours(0, 0, 0, 0);

        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1)

        const allattendence = await Employee.aggregate([
            {
                $match: { role: "Employee" }
            },
            {
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
    })

};