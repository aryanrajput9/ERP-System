import { HTTP_STATUS } from "../../../constant/http-statuscode.js";
import { departmentRepo } from "../repository/department.repo.js";


export const departmentServices = {

    createDepartmentServices: async (input) => {
        // Keep persistence in the repository while this layer coordinates department business operations.

        const department = await departmentRepo.createDepartment(input);

        return department;
    },

    getAllDepartmentServices: async () => {

        return await departmentRepo.findAllDepartment();
    },

    getDepartmentByIdServices: async (id) => {

        // Reject missing IDs and convert an empty database result into a client-facing not-found error.
        if (!id) {
            throw new ApiError(
                HTTP_STATUS.BAD_REQUEST,
                "Department id is required"
            );
        }

        const department = await departmentRepo.findDepartmentById(id);

        if (!department) {
            throw new ApiError(
                HTTP_STATUS.NOT_FOUND,
                "Department not found"
            );
        }

        return department;
    },

    editDepartmentByIdServices: async (data) => {

        // Updates require an identifier; the repository returns the newly updated document.
        if (!data.id) {
            throw new ApiError(
                HTTP_STATUS.BAD_REQUEST,
                "Department id is required"
            );
        }

        const department = await departmentRepo.editDepartmentById(data);

        if (!department) {
            throw new ApiError(
                HTTP_STATUS.NOT_FOUND,
                "Department not found"
            );
        }

        return department;
    },

    deleteDepartmentByIdServices: async (id) => {

        // Deletion follows the same validation and not-found contract as reads and updates.
        if (!id) {
            throw new ApiError(
                HTTP_STATUS.BAD_REQUEST,
                "Department id is required"
            );
        }

        const department = await departmentRepo.deleteDepartmentById(id);

        if (!department) {
            throw new ApiError(
                HTTP_STATUS.NOT_FOUND,
                "Department not found"
            );
        }

        return department;
    }

};