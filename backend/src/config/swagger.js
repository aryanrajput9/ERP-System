import "dotenv/config";
import swaggerJsdoc from "swagger-jsdoc";

// Keep the OpenAPI description beside the existing route modules; swagger-jsdoc reads their comments at startup.
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",

        info: {
            title: "ERP System API",
            version: "1.0.0",
            description: "API documentation for ERP System",
        },

        servers: [
            {
                url: `http://localhost:${process.env.PORT || 5000}`,
                description: "Local server",
            },
        ],

        components: {
            // Reusable schemas, responses, and bearer security keep route documentation consistent.
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
            schemas: {
                Error: {
                    type: "object",
                    properties: {
                        statusCode: { type: "integer", example: 400 },
                        message: { type: "string", example: "Invalid request" },
                        success: { type: "boolean", example: false },
                    },
                },
                EmployeeRegistration: {
                    type: "object",
                    required: ["firstName", "lastName", "email", "phone", "password", "gender", "dateOfBirth", "department", "designation", "salary", "address"],
                    properties: {
                        firstName: { type: "string", example: "Asha" },
                        lastName: { type: "string", example: "Sharma" },
                        email: { type: "string", format: "email", example: "asha@example.com" },
                        phone: { type: "string", example: "+919876543210" },
                        password: { type: "string", format: "password", minLength: 8, example: "Password@123" },
                        gender: { type: "string", enum: ["Male", "Female", "Other"] },
                        dateOfBirth: { type: "string", format: "date" },
                        department: { type: "string" },
                        designation: { type: "string" },
                        salary: { type: "number", minimum: 0 },
                        employmentType: { type: "string", enum: ["Full-Time", "Part-Time", "Intern", "Contract"] },
                        role: { type: "string", enum: ["Admin", "Manager", "HR", "Employee"] },
                        profileImage: { type: "string" },
                        address: { type: "string" },
                        city: { type: "string" },
                        state: { type: "string" },
                        country: { type: "string" },
                        pincode: { type: "string" },
                    },
                },
                Login: {
                    type: "object",
                    required: ["email", "password"],
                    properties: {
                        email: { type: "string", format: "email" },
                        password: { type: "string", format: "password", minLength: 8 },
                    },
                },
                Department: {
                    type: "object",
                    required: ["name", "code"],
                    properties: {
                        name: { type: "string" },
                        code: { type: "string" },
                        description: { type: "string" },
                        manager: { type: "string" },
                        isActive: { type: "boolean" },
                    },
                },
                Designation: {
                    type: "object",
                    required: ["title", "code"],
                    properties: {
                        title: { type: "string" },
                        code: { type: "string" },
                        description: { type: "string" },
                        isActive: { type: "boolean" },
                    },
                },
                Leave: {
                    type: "object",
                    properties: {
                        leaveType: { type: "string" },
                        startDate: { type: "string", format: "date" },
                        endDate: { type: "string", format: "date" },
                        reason: { type: "string" },
                    },
                },
                Task: {
                    type: "object",
                    required: ["title", "description", "assignedTo"],
                    properties: {
                        title: { type: "string" },
                        description: { type: "string" },
                        assignedTo: { type: "string" },
                        priority: { type: "string", enum: ["Low", "Medium", "High"] },
                        status: { type: "string", enum: ["Pending", "In Progress", "Completed"] },
                        startDate: { type: "string", format: "date-time" },
                        dueDate: { type: "string", format: "date-time" },
                        estimatedHours: { type: "number" },
                        tags: { type: "array", items: { type: "string" } },
                    },
                },
                Message: {
                    type: "object",
                    required: ["receiverId", "message"],
                    properties: {
                        receiverId: { type: "string" },
                        message: { type: "string" },
                    },
                },
            },
            responses: {
                BadRequest: { description: "Bad request", content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } } },
                Unauthorized: { description: "Authentication required or token invalid", content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } } },
                NotFound: { description: "Resource not found", content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } } },
            },
        },

        tags: [
            {
                name: "Authentication",
                description: "Authentication related APIs",
            },
            {
                name: "Employees",
                description: "Employee related APIs",
            },
            {
                name: "Departments",
                description: "Department related APIs",
            },
            {
                name: "Attendance",
                description: "Attendance related APIs",
            },
            { name: "Designations", description: "Designation related APIs" },
            { name: "Leave", description: "Leave related APIs" },
            { name: "Tasks", description: "Task related APIs" },
            { name: "Messages", description: "Chat message APIs" },
        ],
    },

    apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default swaggerSpec;