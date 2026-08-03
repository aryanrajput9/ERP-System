import Department from "../model/department.js";



export const departmentRepo = {

    createDepartment: async (input) => {

        const department = await Department.create(input);

        return department;
    },
    findAllDepartment: async () => {
        const department = await Department.find()
        return department
    }
}