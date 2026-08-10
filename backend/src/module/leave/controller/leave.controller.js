import { HTTP_STATUS } from "../../../constant/http-statuscode.js";
import { ApiResponse } from "../../../utils/api-respinse.js";
import { asyncHandler } from "../../../utils/async-hanlder.js";
import leaveServices from "../services/leave.service.js";




const leaveEmployeeController = {
    createLeave: asyncHandler(async (req, res) => {
        const input = {
            ...req.body,
            employee: req.employee._id,
        };

        const leave = await leaveServices.createLeave(input);

        return res.status(201).json(
            new ApiResponse(201, "Leave request created successfully", leave)
        );
    }),

    getMyLeaves: asyncHandler(async (req, res) => {
        const leaves = await leaveServices.getLeavesByEmployeeId(req.employee._id);

        return res.status(200).json(
            new ApiResponse(200, "All Leaves", leaves)
        );
    }),

    getLeaveById: asyncHandler(async (req, res) => {
        const { id } = req.params;

        const leave = await leaveServices.getLeaveById(id);

        return res.status(200).json(
            new ApiResponse(200, "Leave", leave)
        );
    }),

    approveLeaveById: asyncHandler(async (req, res) => {
        const { id } = req.params;

        const leave = await leaveServices.approveLeaveById(
            id,
            req.employee._id
        );

        return res.status(200).json(
            new ApiResponse(200, "Leave Approved", leave)
        );
    }),

    rejectLeaveById: asyncHandler(async (req, res) => {
        const { id } = req.params;
        const { reason } = req.body;

        const leave = await leaveServices.rejectLeave(id, reason);

        return res.status(200).json(
            new ApiResponse(200, "Leave Rejected", leave)
        );
    }),
};


export default leaveEmployeeController