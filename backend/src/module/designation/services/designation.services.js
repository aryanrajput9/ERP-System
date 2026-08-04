import id from "zod/v4/locales/id.cjs";
import { HTTP_STATUS } from "../../../constant/http-statuscode.js";
import { ApiError } from "../../../utils/api-error.js";
import { designationRepository } from "../repository/designation.repo.js";



export const designationServices = {

    createDesignationServices: async (input) => {

        const designation = await designationRepository.createDesignation(input);

        return designation;
    },

    getAllDesignationServices: async () => {

        return await designationRepository.getAllDesignation();
    },

    getDesignationByIdServices: async (id) => {

        if (!id) {
            throw new ApiError(
                HTTP_STATUS.BAD_REQUEST,
                "Designation id is required"
            );
        }

        const designation = await designationRepository.getDesignationById(id);

        if (!designation) {
            throw new ApiError(
                HTTP_STATUS.NOT_FOUND,
                "Designation not found"
            );
        }

        return designation;
    },

    editDesignationByIdServices: async (id, data) => {

        if (!id) {
            throw new ApiError(
                HTTP_STATUS.BAD_REQUEST,
                "Designation id is required"
            );
        }

        const designation = await designationRepository.editDesignationById(
            id,
            data
        );

        if (!designation) {
            throw new ApiError(
                HTTP_STATUS.NOT_FOUND,
                "Designation not found"
            );
        }

        return designation;
    },

    deleteDesignationByIdServices: async (id) => {

        if (!id) {
            throw new ApiError(
                HTTP_STATUS.BAD_REQUEST,
                "Designation id is required"
            );
        }

        const designation = await designationRepository.deleteDesignationById(id);

        if (!designation) {
            throw new ApiError(
                HTTP_STATUS.NOT_FOUND,
                "Designation not found"
            );
        }

        return designation;
    }

};