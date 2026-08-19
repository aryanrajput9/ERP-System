


export class ApiError extends Error {

    constructor(statusCode, message, error = []) {
        // Standardize expected API failures so the global handler can choose the HTTP status and response shape.
        super(message);

        this.statusCode = statusCode;
        this.error;
        this.success = false;
        Error.captureStackTrace(this, this.constructor)
    }
}