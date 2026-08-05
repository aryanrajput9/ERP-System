import e from "cors";
import { HTTP_STATUS } from "../constant/http-statuscode.js";
import authRepo from "../repository/auth.repo.js";
import { ApiError } from "../utils/api-error.js";
import { jwtToken } from "../utils/jwt.js";









export const authServices = {

    // ==========================
    // SIGNUP
    // ==========================
    signup: async (data) => {

        // ✅ COMMIT: Check if email already exists
        const isExist = await authRepo.findByEmail(data.email);

        if (isExist) {
            throw new ApiError(
                HTTP_STATUS.CONFLICT,
                "Email already registered"
            );
        }

        // ✅ COMMIT: Create employee
        const employee = await authRepo.create(data);

        // ✅ COMMIT: Generate JWT using Mongo _id
        const accessToken = jwtToken.generateAccessToken({
            userId: employee._id,
        });

        const refreshToken = jwtToken.generateRefreshToken({
            userId: employee._id,
        });

        return {
            employee,
            accessToken,
            refreshToken,
        };
    },

    // ==========================
    // LOGIN
    // ==========================
    login: async (email, password) => {

        // ✅ COMMIT: Find employee by email
        const employee = await authRepo.findByEmail(email);

        if (!employee) {
            throw new ApiError(
                HTTP_STATUS.NOT_FOUND,
                "Employee not found"
            );
        }

        // ✅ COMMIT: Verify password before login
        const isMatch = await employee.comparepassword(password);

        if (!isMatch) {
            throw new ApiError(
                HTTP_STATUS.UNAUTHORIZED,
                "Invalid credentials"
            );
        }

        // ✅ COMMIT: Generate JWT using Mongo _id
        const accessToken = jwtToken.generateAccessToken({
            userId: employee._id,
        });

        const refreshToken = jwtToken.generateRefreshToken({
            userId: employee._id,
        });

        return {
            employee,
            accessToken,
            refreshToken,
        };
    },
};