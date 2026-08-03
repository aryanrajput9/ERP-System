import { departmentRepo } from "../repository/department.repo.js";


export const departmentServices = {

    createDepartmentServices: async (input) => {

        const department = await departmentRepo.createDepartment(input);

        if (!department) {
            throw new ApiError(
                HTTP_STATUS.CONFLICT,
                "Department not created"
            );
        }

        return department;
    },
    getAllDepartmentServices: async () => {

        const department = await departmentRepo.findAllDepartment();

        return department;
    }

}