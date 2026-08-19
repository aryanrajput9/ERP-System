import { HTTP_STATUS } from "../../../constant/http-statuscode.js";
import { ApiResponse } from "../../../utils/api-respinse.js";
import { asyncHandler } from "../../../utils/async-hanlder.js";
import { designationServices } from "../services/designation.services.js";



export const sanitizeDesignation = (designation) => ({
    // Return the public designation shape rather than exposing the full Mongoose document.
    id: designation._id,
    title: designation.title,
    code: designation.code,
    description: designation.description,
    isActive: designation.isActive,
    createdAt: designation.createdAt,
    updatedAt: designation.updatedAt,
});

export const designationController = {

    createDesignationController: asyncHandler(async (req, res) => {

        // Map editable request fields to the service, then format the created designation.
        const {
            title,
            code,
            description,
            isActive
        } = req.body;

        const input = {
            title,
            code,
            description,
            isActive
        };

        const designation = await designationServices.createDesignationServices(input);

        return res.status(HTTP_STATUS.CREATED).json(
            new ApiResponse(
                HTTP_STATUS.CREATED,
                "Designation created successfully",
                sanitizeDesignation(designation)
            )
        );
    }),

    getAllDesignationController: asyncHandler(async (_req, res) => {

        // Sanitize every designation in the collection before returning the list.
        const designations = await designationServices.getAllDesignationServices();

        return res.status(HTTP_STATUS.OK).json(
            new ApiResponse(
                HTTP_STATUS.OK,
                "Designations fetched successfully",
                designations.map(sanitizeDesignation)
            )
        );
    }),

    getDesignationByIdController: asyncHandler(async (req, res) => {

        const { id } = req.params;

        const designation = await designationServices.getDesignationByIdServices(id);

        return res.status(HTTP_STATUS.OK).json(
            new ApiResponse(
                HTTP_STATUS.OK,
                "Designation fetched successfully",
                sanitizeDesignation(designation)
            )
        );
    }),

    editDesignationByIdController: asyncHandler(async (req, res) => {

        // Pass the route ID separately so the repository can update only body fields.
        const { id } = req.params;
        const data = { ...req.body };

        const designation = await designationServices.editDesignationByIdServices(
            id,
            data
        );

        return res.status(HTTP_STATUS.OK).json(
            new ApiResponse(
                HTTP_STATUS.OK,
                "Designation updated successfully",
                sanitizeDesignation(designation)
            )
        );
    }),

    deleteDesignationByIdController: asyncHandler(async (req, res) => {

        const { id } = req.params;

        const designation = await designationServices.deleteDesignationByIdServices(id);

        return res.status(HTTP_STATUS.OK).json(
            new ApiResponse(
                HTTP_STATUS.OK,
                "Designation deleted successfully",
                sanitizeDesignation(designation)
            )
        );
    })

};