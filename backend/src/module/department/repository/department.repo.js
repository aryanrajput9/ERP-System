import Department from "../model/department.js";



export const departmentRepo = {
    createDepartment: async (input) => {
        return await Department.create(input);
    },

    findAllDepartment: async () => {
        return await Department.find().lean();
    },

    findDepartmentById: async (id) => {
        return await Department.findById(id).lean();
    },

    editDepartmentById: async ({ id, ...updateData }) => {
        return await Department.findByIdAndUpdate(
            id,
            { $set: updateData },
            {
                new: true,
                runValidators: true
            }
        );
    },

    deleteDepartmentById: async (id) => {
        return await Department.findByIdAndDelete(id);
    }
};