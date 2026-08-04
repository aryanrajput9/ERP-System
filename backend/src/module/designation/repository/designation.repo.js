import { Designation } from "../schema/designation.model.js";





export const designationRepository = {

    createDesignation: async (input) => {
        return await Designation.create(input);
    },

    getAllDesignation: async () => {
        return await Designation.find().lean();
    },

    getDesignationById: async (id) => {
        return await Designation.findById(id).lean();
    },

    editDesignationById: async (id, data) => {
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
        return await Designation.findByIdAndDelete(id);
    }

};