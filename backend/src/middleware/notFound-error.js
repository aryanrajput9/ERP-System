import { HTTP_STATUS } from "../constant/http-statuscode.js";


export const notFoundError = (req, _res, next) => {

    // No route matched this URL, so forward a 404 for the shared error formatter.
    const error = new Error(`Route Not Found ${req.originalUrl}`);
    error.statuscode = HTTP_STATUS.NOT_FOUND;
    console.log(error)
    next(error)
}