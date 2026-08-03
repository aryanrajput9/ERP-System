import { HTTP_STATUS } from "../constant/http-statuscode.js";
import authRepo from "../repository/auth.repo.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-hanlder.js";
import { jwtToken } from "../utils/jwt.js";



const authMiddleware = asyncHandler(async (req, _res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new ApiError(HTTP_STATUS.UNAUTHORIZED, "Token invalid");
    };
    const token = authHeader.split(" ")[2];


    const decode = jwtToken.verifyAccessToken(token);

    if (!decode) throw new ApiError(HTTP_STATUS.UNAUTHORIZED, "Token invalid");

    const employee = await authRepo.findById(decode.userId);

    if (!employee) {
        throw new ApiError(HTTP_STATUS.UNAUTHORIZED, "User not found");
    }

    req.employee = employee;

    next()


})

export default authMiddleware