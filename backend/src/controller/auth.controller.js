import { HTTP_STATUS } from "../constant/http-statuscode.js";
import { Employee } from "../model/employe.model.js";
import { authServices } from "../services/auth.services.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-respinse.js";
import { asyncHandler } from "../utils/async-hanlder.js";
import { jwtToken } from "../utils/jwt.js";



function sanitizeEmployee(employee, accessToken = "") {
    return {
        id: employee._id,
        name: `${employee.firstName} ${employee.lastName}`,
        email: employee.email,
        gender: employee.gender,
        profileImage: employee.profileImage,
        department: employee.department,
        role: employee.role,
        isActive: employee.isActive,
        accessToken,
        role: employee.role,
        employeeId: employee.employeeId,
        joiningDate: employee.joiningDate

    };
};

export const cookiesConst = (maxAge) => ({
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge,
    path: "/",
});


export const authContoller = {
    // ==========================
    // SIGNUP
    // ==========================
    sigup: asyncHandler(async (req, res) => {

        const {
            firstName,
            lastName,
            email,
            phone,
            password,
            gender,
            dateOfBirth,
            profileImage,
            salary,
            employmentType,
            role,
            address,
            city,
            state,
            country,
            pincode,
        } = req.body;

        // ✅ COMMIT: Generate employeeId in one place
        let employeeId;

        if (role === "Manager") {

            employeeId = jwtToken.createManagerId();
        } else if (role === "Hr") {
            employeeId = jwtToken.createHrId()
        } else {
            employeeId = jwtToken.createEmployeId()
        }

        const input = {
            employeeId,
            firstName,
            lastName,
            email,
            phone,
            password,
            gender,
            dateOfBirth,
            profileImage,
            salary,
            employmentType,
            role,
            address,
            city,
            state,
            country,
            pincode,
        };

        const { accessToken, refreshToken, employee } =
            await authServices.signup(input);

        // ✅ COMMIT: Save refresh token in cookie
        res.cookie(
            "refreshToken",
            refreshToken,
            cookiesConst(7 * 24 * 60 * 60 * 1000)
        );

        return res.status(HTTP_STATUS.CREATED).json(
            new ApiResponse(
                HTTP_STATUS.CREATED,
                "Employee created successfully",
                sanitizeEmployee(employee),
                accessToken
            )
        );
    }),

    // ==========================
    // LOGIN
    // ==========================
    login: asyncHandler(async (req, res) => {

        const { email, password } = req.body;

        const { accessToken, refreshToken, employee } =
            await authServices.login(email, password);

        // ✅ COMMIT: Save refresh token after successful login
        res.cookie(
            "refreshToken",
            refreshToken,
            cookiesConst(7 * 24 * 60 * 60 * 1000)
        );

        return res.status(HTTP_STATUS.OK).json(
            new ApiResponse(
                HTTP_STATUS.OK,
                "Employee login successful",
                sanitizeEmployee(employee, accessToken),
            ),

        );
    }),

    // ==========================
    // GET CURRENT USER
    // ==========================
    getMe: asyncHandler(async (req, res) => {

        // ✅ COMMIT: Employee already available from middleware
        const employee = req.employee;

        return res.status(HTTP_STATUS.OK).json(
            new ApiResponse(
                HTTP_STATUS.OK,
                "Employee data fetched successfully",
                sanitizeEmployee(employee)
            )
        );
    }),

    // ==========================
    // REFRESH ACCESS TOKEN
    // ==========================
    reFreshTokens: asyncHandler(async (req, res) => {

        const refreshToken = req.cookies.refreshToken;

        // ✅ COMMIT: Throw ApiError instead of ApiResponse
        if (!refreshToken) {
            throw new ApiError(
                HTTP_STATUS.UNAUTHORIZED,
                "Refresh token missing"
            );
        }

        const decode = jwtToken.verifyRefreshToken(refreshToken);

        if (!decode) {
            throw new ApiError(
                HTTP_STATUS.UNAUTHORIZED,
                "Invalid refresh token"
            );
        }

        // ✅ COMMIT: Generate new access token
        const accessToken = jwtToken.generateAccessToken({
            userId: decode.userId,
        });

        return res.status(HTTP_STATUS.OK).json(
            new ApiResponse(
                HTTP_STATUS.OK,
                "Access token generated successfully",
                {
                    accessToken,
                }
            )
        );
    }),

    getAllEmploye: asyncHandler(async (_req, res) => {

        const employee = await Employee.find(
            { role: "Employee" }
        );

        return res.status(200).json(
            employee.map(sanitizeEmployee)
        )
    })
};