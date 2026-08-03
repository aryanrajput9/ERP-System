import { HTTP_STATUS } from "../constant/http-statuscode.js";


export const notFoundError = (req, _res, next) => {

    const error = new Error(`Route Not Found ${req.originalUrl}`);
    error.statuscode = HTTP_STATUS.NOT_FOUND;
    console.log(error)
    next(error)
}