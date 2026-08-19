import { Designation } from "../schema/designation.model.js";





export const designationRepository = {

    createDesignation: async (input) => {
        // Mongoose applies the schema's required, unique, and uppercase constraints on insert.
        return await Designation.create(input);
    },

    getAllDesignation: async () => {
        // Read-only list results are returned as plain objects.
        return await Designation.find().lean();
    },

    getDesignationById: async (id) => {
        return await Designation.findById(id).lean();
    },

    editDesignationById: async (id, data) => {
        // Apply partial updates, validate them, and return the post-update document.
        return await Designation.findByIdAndUpdate(
            id,
            { $set: data },
            {
                new: true,
                runValidators: true,
            }
        );
    },

    deleteDesignationById: async (id) => {
        // Return the deleted document so the controller can include it in the response.
        return await Designation.findByIdAndDelete(id);
    }

};