import { HTTP_STATUS } from "../../../constant/http-statuscode.js";
import { ApiResponse } from "../../../utils/api-respinse.js";
import { asyncHandler } from "../../../utils/async-hanlder.js";
import leaveRepository from "../repository/leave.repositorry.js";
import leaveServices from "../services/leave.service.js";




const leaveEmployeeController = {
    createLeave: asyncHandler(async (req, res) => {
        // The authenticated employee becomes the owner of the request; clients cannot choose another employee.
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
        // Scope self-service history to the identity established by authMiddleware.
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

        // Record the authenticated approver identity for the service/repository update.
        console.log(req.employee)
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
        // The service requires a reason so rejected requests retain an audit explanation.
        const { reason } = req.body;

        const leave = await leaveServices.rejectLeave(id, reason);

        return res.status(200).json(
            new ApiResponse(200, "Leave Rejected", leave)
        );
    }),
    getAllLeave: asyncHandler(async (_req, res) => {

        // This returns the populated leave list used by administrative views.
        const allleave = await leaveRepository.getAllLeave();

        return res.status(HTTP_STATUS.OK).json(
            new ApiResponse(
                HTTP_STATUS.OK,
                "All Leave",
                allleave
            )
        )
    })
};


export default leaveEmployeeController