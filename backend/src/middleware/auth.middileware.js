import { HTTP_STATUS } from "../constant/http-statuscode.js";
import authRepo from "../repository/auth.repo.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-hanlder.js";
import { jwtToken } from "../utils/jwt.js";



const authMiddleware = asyncHandler(async (req, _res, next) => {

    // Require the standard Bearer header before attempting JWT verification.
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new ApiError(HTTP_STATUS.UNAUTHORIZED, "Token invalid");
    };
    const token = authHeader.split(" ")[2];


    // Verify the access token, then resolve its user ID to a current employee record.
    const decode = jwtToken.verifyAccessToken(token);

    if (!decode) throw new ApiError(HTTP_STATUS.UNAUTHORIZED, "Token invalid");

    const employee = await authRepo.findById(decode.userId);

    if (!employee) {
        throw new ApiError(HTTP_STATUS.UNAUTHORIZED, "User not found");
    }

    // Downstream controllers use this trusted record to scope employee-owned operations.
    req.employee = employee;

    next()


})

export default authMiddleware