import Department from "../model/department.js";



export const departmentRepo = {
    createDepartment: async (input) => {
        // Insert a department document using Mongoose schema validation.
        return await Department.create(input);
    },

    findAllDepartment: async () => {
        // lean() returns plain objects for read-only list responses without Mongoose document overhead.
        return await Department.find().lean();
    },

    findDepartmentById: async (id) => {
        return await Department.findById(id).lean();
    },

    editDepartmentById: async ({ id, ...updateData }) => {
        // Apply only supplied fields, validate them, and return the updated department.
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
        // Remove the department by its MongoDB identifier and return the deleted document.
        return await Department.findByIdAndDelete(id);
    }
};