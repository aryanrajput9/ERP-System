import { HTTP_STATUS } from "../../../constant/http-statuscode.js";
import { ApiResponse } from "../../../utils/api-respinse.js";
import { asyncHandler } from "../../../utils/async-hanlder.js";
import { departmentServices } from "../services/department.services.js";

function sanitizeDepartment(department) {
    return {
        _id: department._id,
        name: department.name,
        code: department.code,
        description: department.description,
        manager: department.manager,
        isActive: department.isActive,
        createdAt: department.createdAt,
        updatedAt: department.updatedAt,
    };
}


export const departmentController = {

    createDepartmentController: asyncHandler(async (req, res) => {

        const {
            name,
            code,
            description,
            manager,
            isActive,
        } = req.body;

        const input = {
            name,
            code,
            description,
            manager,
            isActive,
        };

        const department = await departmentServices.createDepartmentServices(input);

        return res.status(HTTP_STATUS.CREATED).json(
            new ApiResponse(
                HTTP_STATUS.CREATED,
                "Department created successfully",
                sanitizeDepartment(department)
            )
        );
    }),

    getAllDepartmentsController: asyncHandler(async (_req, res) => {

        const departments = await departmentServices.getAllDepartmentServices();

        return res.status(HTTP_STATUS.OK).json(
            new ApiResponse(
                HTTP_STATUS.OK,
                "Departments fetched successfully",
                departments.map(sanitizeDepartment)
            )
        );
    }),

    getDepartmentByIdController: asyncHandler(async (req, res) => {

        const { id } = req.params;

        const department = await departmentServices.getDepartmentByIdServices(id);

        return res.status(HTTP_STATUS.OK).json(
            new ApiResponse(
                HTTP_STATUS.OK,
                "Department fetched successfully",
                sanitizeDepartment(department)
            )
        );
    }),

    editDepartmentByIdController: asyncHandler(async (req, res) => {

        const { id } = req.params;
        const data = { id, ...req.body };

        const department = await departmentServices.editDepartmentByIdServices(data);

        return res.status(HTTP_STATUS.OK).json(
            new ApiResponse(
                HTTP_STATUS.OK,
                "Department updated successfully",
                sanitizeDepartment(department)
            )
        );
    }),

    deleteDepartmentByIdController: asyncHandler(async (req, res) => {

        const { id } = req.params;

        const department = await departmentServices.deleteDepartmentById(id);

        return res.status(HTTP_STATUS.OK).json(
            new ApiResponse(
                HTTP_STATUS.OK,
                "Department deleted successfully",
                sanitizeDepartment(department)
            )
        );
    })

};