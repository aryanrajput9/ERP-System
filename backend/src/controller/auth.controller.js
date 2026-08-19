import { HTTP_STATUS } from "../constant/http-statuscode.js";
import { Employee } from "../model/employe.model.js";
import { authServices } from "../services/auth.services.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-respinse.js";
import { asyncHandler } from "../utils/async-hanlder.js";
import { jwtToken } from "../utils/jwt.js";



function sanitizeEmployee(employee, accessToken = "") {
    // Keep authentication responses safe by exposing profile data but never the password hash.
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
    // Refresh tokens live in an HTTP-only cookie so browser scripts cannot read them directly.
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
        // Generate a role-prefixed business ID while MongoDB still owns the database identity.
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
        // Keep the long-lived refresh token in the cookie; return the short-lived access token in the response.
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
        // A successful service response provides both tokens; only the refresh token is persisted in a cookie.
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
        // Authentication middleware has already verified the token and attached this employee.
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
        // A missing or invalid cookie cannot be used to mint a new access token.
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
        // Refreshing rotates only the short-lived access token; the refresh cookie remains valid.
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

        // This endpoint intentionally selects employees by role for the employee directory response.
        const employee = await Employee.find(
            { role: "Employee" }
        );

        return res.status(200).json(
            employee.map(sanitizeEmployee)
        )
    })
};