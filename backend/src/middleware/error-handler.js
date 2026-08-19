
import { HTTP_STATUS } from "../constant/http-statuscode.js";


export const errorHandler = (err, _req, res, next) => {

    // Client errors carry their own status; unknown failures are treated as server errors.
    const statusCode = err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;


    // Client Error: 4xx responses describe invalid, unauthenticated, or missing requests.
    // Server Error: 5xx responses describe failures while processing an otherwise valid request.
    res.status(statusCode).json(
        {
            success: false,
            statusCode,
            message: err.message || "Internal Server Error",
            stack: process.env.NODE_ENVNODE_ENV === "development" ? err.stack : undefined
        }
    )

}