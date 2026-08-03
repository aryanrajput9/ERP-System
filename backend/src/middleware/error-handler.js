
import { HTTP_STATUS } from "../constant/http-statuscode.js";


export const errorHandler = (err, _req, res, next) => {

    const statusCode = err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;


    res.status(statusCode).json(
        {
            success: false,
            statusCode,
            message: err.message || "Internal Server Error",
            stack: process.env.NODE_ENVNODE_ENV === "development" ? err.stack : undefined
        }
    )

}