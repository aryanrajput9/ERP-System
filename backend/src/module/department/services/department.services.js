import { HTTP_STATUS } from "../../../constant/http-statuscode.js";
import { departmentRepo } from "../repository/department.repo.js";


export const departmentServices = {

    createDepartmentServices: async (input) => {

        const department = await departmentRepo.createDepartment(input);

        return department;
    },

    getAllDepartmentServices: async () => {

        return await departmentRepo.findAllDepartment();
    },

    getDepartmentByIdServices: async (id) => {

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