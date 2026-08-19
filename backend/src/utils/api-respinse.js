export class ApiResponse {
    constructor(statusCode, message = "Success", data = null) {
        // Successful endpoints return a consistent envelope around their payload.
        this.statusCode = statusCode;
        this.success = true;
        this.message = message;
        this.data = data;
    }
}