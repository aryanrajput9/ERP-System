# ERP System

ERP System is a JavaScript-based employee operations application. It contains an Express/Mongoose backend and a React/Vite frontend for employee authentication, attendance, leave management, task management, department and designation data, and employee chat.

This README describes the code that currently exists in the repository. Some screens and dependencies represent work in progress, so planned features are listed separately from implemented features.

## 1. Project Overview

The project is intended to centralize common employee-management workflows:

- Create and authenticate employee accounts.
- Track employee attendance and working hours.
- Submit, review, approve, and reject leave requests.
- Maintain department and designation records.
- Create and list tasks.
- Exchange private chat messages over HTTP and Socket.IO.

The current backend is the source of truth for the implemented API. The frontend provides employee and admin-oriented screens, but not every visible screen has a corresponding completed backend workflow.

## 2. Current Project Status

### Implemented

- Employee registration and login.
- Access-token authentication and refresh-token cookies.
- Current employee lookup and employee-directory listing.
- Employee check-in, check-out, today's attendance, and attendance history.
- Department CRUD handlers.
- Designation CRUD handlers.
- Leave creation, personal leave listing, leave lookup, approval, rejection, and all-leave listing.
- Task creation and task listing.
- Chat message creation and two-person conversation retrieval.
- Socket.IO room joining and receiver-targeted message notifications.
- Swagger/OpenAPI generation and Swagger UI.
- React/Vite frontend routes for employee and admin-oriented dashboards.

### Incomplete or not implemented in the backend

- Employee update and delete endpoints.
- Explicit Admin, HR, or Manager authorization middleware.
- Salary, payroll, or payslip APIs.
- Holiday APIs.
- Reports APIs.
- Profile update and password-change APIs.
- Task update, delete, assignment management, and status-transition APIs.
- A completed employee-registration screen in the frontend.
- Frontend CRUD screens for all department and designation operations.

The frontend includes salary/profile-oriented screens, but the backend does not currently provide all of the APIs those screens would require. The existing package test script is also a placeholder and exits with an error.

## 3. Main Features

| Module | Current capability |
| --- | --- |
| Authentication | Register, login, current employee, refresh token |
| Employees | List employees whose role is `Employee` |
| Departments | Create, list, read by ID, update, delete |
| Designations | Create, list, read by ID, update, delete |
| Attendance | Check in, check out, today's record, history, employee/all-employee reads |
| Leave | Create, list own leaves, read by ID, approve, reject, list all |
| Tasks | Create and list tasks |
| Chat | Create messages, retrieve a conversation, Socket.IO notifications |

The code defines employee roles (`Admin`, `Manager`, `HR`, and `Employee`), but role values are not enforced by a backend authorization middleware. Authentication and authorization are therefore not equivalent in the current implementation.

## 4. Tech Stack

### Backend

- Node.js with ECMAScript modules.
- Express 5.
- MongoDB with Mongoose.
- JSON Web Tokens through `jsonwebtoken`.
- `bcryptjs` for password hashing and comparison.
- `cookie-parser` for refresh-token cookies.
- Socket.IO for real-time messaging.
- `swagger-jsdoc` and `swagger-ui-express` for OpenAPI documentation.
- `express-validator` for authentication input rules.
- `dotenv` for environment configuration.
- `multer`, `cloudinary`, `cors`, `compression`, `helmet`, `morgan`, `express-rate-limit`, and `zod` are installed dependencies; not all are currently used by the inspected backend request flow.

### Frontend

- React 19 and React DOM.
- Vite.
- React Router.
- Redux Toolkit and React Redux.
- Axios.
- Socket.IO client.
- React Hook Form, Zod, Tailwind CSS, Lucide React, Day.js, and related UI utilities.

## 5. Project Architecture

```text
ERP_SYSTEM/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── gernerate/
│   └── src/
│       ├── app.js
│       ├── config/
│       ├── constant/
│       ├── controller/
│       ├── middleware/
│       ├── model/
│       ├── module/
│       │   ├── attendance/
│       │   ├── chat/
│       │   ├── department/
│       │   ├── designation/
│       │   ├── leave/
│       │   └── task/
│       ├── repository/
│       ├── routes/
│       ├── services/
│       ├── utils/
│       └── validator/
├── client/
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── app/
│       ├── assets/
│       ├── feature/
│       ├── index.css
│       └── shared/
└── readme.md
```

### Backend responsibilities

- `server.js`: creates the HTTP server, initializes Socket.IO, connects MongoDB, and listens on the configured port.
- `src/app.js`: configures JSON and cookie parsing, mounts Swagger UI, mounts `/api` routes, and registers 404/error middleware.
- `src/config/`: database, environment, and Swagger configuration.
- `src/constant/`: shared HTTP status values.
- `src/controller/`: top-level authentication controller.
- `src/middleware/`: access-token authentication, not-found handling, and global error formatting.
- `src/model/`: top-level Mongoose models such as Employee.
- `src/module/`: feature-specific controllers, services, repositories, and schemas/models.
- `src/repository/`: shared repositories such as authentication data access.
- `src/routes/`: Express routers and module-level endpoint registration.
- `src/services/`: shared business services and Socket.IO initialization.
- `src/utils/`: JWT helpers, async handler, API error, and API response wrappers.
- `src/validator/`: Express Validator rules for registration and login.

The normal backend organization is:

```text
route -> middleware -> controller -> service -> repository -> Mongoose model -> MongoDB
```

Some existing controllers call repositories directly for individual operations, so the diagram represents the dominant pattern rather than an enforced rule for every endpoint.

### Frontend responsibilities

- `client/src/app/`: application shell, Redux store, layouts, API clients, Socket.IO client, and routes.
- `client/src/feature/`: authentication and employee/admin dashboard features.
- `client/src/shared/`: shared UI, hooks, state, and Axios service configuration.

## 6. Request Flow

For a typical protected REST request:

```text
Browser/client
	-> Vite proxy or backend URL
	-> Express JSON/cookie middleware
	-> /api module router
	-> authMiddleware when registered
	-> controller
	-> service business checks
	-> repository/Mongoose query
	-> MongoDB
	-> ApiResponse or global errorHandler
```

Authentication middleware reads `Authorization: Bearer <access-token>`, verifies the JWT, loads the employee by the token's MongoDB ID, and places the employee document on `req.employee`. Controllers use that value for employee-owned attendance, leave, task, and message operations.

The registration validator is attached to the registration route, but the inspected code does not call `validationResult(req)` to convert validator errors into a response. This is a current implementation limitation.

## 7. Authentication and Authorization

### Registration

`POST /api/employee/register-employee` validates identity, contact, password, gender, date, department, designation, salary, employment type, role, and address fields. The authentication service rejects an existing email, creates the Employee document, and generates access and refresh tokens.

The controller generates business employee IDs with `EMP`, `MGR`, or `HR` prefixes depending on the requested role. The code checks for `Hr` when generating an HR ID, while the Employee schema enum contains `HR`; this casing mismatch is a current limitation.

### Login

`POST /api/employee/login-employee` finds the employee by email, explicitly selects the normally hidden password hash, compares the submitted password with `bcryptjs`, and issues access and refresh tokens.

### Tokens

- Access token lifetime: 15 minutes.
- Refresh token lifetime: 7 days.
- Access token: returned in the API response.
- Refresh token: stored in an HTTP-only `refreshToken` cookie.
- Token secrets are loaded from environment variables and are not documented here.

`GET /api/employee/refresh-token` reads the refresh cookie, verifies it with the refresh secret, and returns a new access token.

### Protected routes

The following routes register `authMiddleware`:

- Current employee lookup.
- Attendance create, check-out, current record, and history.
- Leave creation, personal leave listing, approval, and rejection.
- Task creation.
- Chat message creation and conversation retrieval.

### Authorization status

There is no backend middleware that checks whether an authenticated employee is an Admin, HR user, Manager, or Employee. Several department, designation, employee-directory, all-employee attendance, all-leave, and task-list routes are currently registered without authentication middleware. The frontend's `ProtectedRoute` checks only `isAuthenticated`; its `allowedRole` prop is not used in the implementation.

## 8. Database Design

All schemas use Mongoose. Timestamps are enabled on the main models unless noted otherwise.

### Employee

File: `backend/src/model/employe.model.js`

Purpose: stores employee identity, contact, employment, role, salary, and account state.

Important fields and constraints:

- Required unique `employeeId` and `email`.
- Required `firstName`, `lastName`, `phone`, `gender`, `dateOfBirth`, `salary`, and `address`.
- `password` is required and `select: false`; a pre-save hook hashes new or changed passwords.
- `gender`: `Male`, `Female`, or `Other`.
- `employmentType`: `Full-Time`, `Part-Time`, `Intern`, or `Contract`.
- `role`: `Admin`, `Manager`, `HR`, or `Employee`.
- `salary` must be non-negative.
- `department` and `designation` are ObjectId references.
- `isActive` defaults to `true`.

### Department

File: `backend/src/module/department/model/department.js`

Purpose: stores department names, unique uppercase codes, descriptions, manager references, active status, and creator reference.

- `name` and `code` are required and unique.
- `code` is normalized to uppercase.
- `manager` and `createdBy` are intended to reference employee documents.

### Designation

File: `backend/src/module/designation/schema/designation.model.js`

Purpose: stores unique designation titles and uppercase codes.

- Required unique `title` and `code`.
- Optional `description`.
- `isActive` defaults to `true`.

### Attendance

File: `backend/src/module/attendance/schema/attendance.schema.js`

Purpose: stores one employee's attendance state for a date.

- Required `employee` ObjectId reference and `date`.
- Optional `checkIn`, `checkOut`, and `remarks`.
- `workingHours` defaults to `0` and is calculated at checkout from the two timestamps.
- `status`: `Present`, `Absent`, `Leave`, or `Half-Day`.
- No schema-level uniqueness constraint prevents multiple records for one employee/day.

### Leave

File: `backend/src/module/leave/model/leave.model.js`

Purpose: stores employee leave requests and their approval state.

- Required employee reference, leave type, date range, calculated `totalDays`, and reason.
- `leaveType`: `Casual`, `Sick`, or `Earned`.
- `status`: `Pending`, `Approved`, or `Rejected`.
- `approvedBy` references the employee who approved the request.
- `rejectionReason` stores the explanation for rejected requests.
- The service calculates inclusive leave days and rejects a start date after the end date.

### Task

File: `backend/src/module/task/schema/task.schema.js`

Purpose: stores work assigned to an employee.

- Required `title`, `assignedTo`, and `createdBy`.
- `assignedTo` is an Employee ObjectId; `createdBy` is stored as a string business employee ID even though it has reference metadata.
- `priority`: `Low`, `Medium`, or `High`.
- `status`: `Pending`, `In Progress`, or `Completed`.
- Optional start/due/completion dates, estimated hours, tags, and active state.

### Message

File: `backend/src/module/chat/schema/message.schema.js`

Purpose: stores a private message between two participants.

- Required `senderId`, `receiverId`, and trimmed `message`.
- `seen` defaults to `false`.
- Sender and receiver are ObjectId references, and the repository queries both directions of a conversation.
- The schema declares `ref: "User"`, while authentication uses Employee documents; this reference-name mismatch is current code behavior.

### Relationship notes

Employee-owned records use ObjectId references so attendance, leave, tasks, and messages can identify an employee without duplicating the employee profile. Repositories use `populate()` for selected display fields in leave and task queries. Some reference names differ in case or refer to `User` instead of `Employee`, so populated results may not behave as intended until those existing model-name inconsistencies are addressed.

## 9. API Documentation

All REST endpoints below are mounted beneath `/api`. Authentication requirements describe the middleware currently registered on each route, not an inferred role policy.

### Authentication and employees

| Method | Endpoint | Auth | Purpose |
| --- | --- | --- | --- |
| POST | `/api/employee/register-employee` | None | Create an employee and issue tokens |
| POST | `/api/employee/login-employee` | None | Verify credentials and issue tokens |
| GET | `/api/employee/get-cuurent-employe` | Bearer | Return the authenticated employee |
| GET | `/api/employee/refresh-token` | Refresh cookie | Issue a new access token |
| GET | `/api/employee/get-all-employe` | None | List employees with role `Employee` |

Registration body fields:

```json
{
	"firstName": "Asha",
	"lastName": "Sharma",
	"email": "asha@example.com",
	"phone": "+919876543210",
	"password": "Password@123",
	"gender": "Female",
	"dateOfBirth": "1995-01-01",
	"department": "department-id",
	"designation": "designation-id",
	"salary": 50000,
	"address": "Example address"
}
```

The validator also accepts optional `employmentType`, `role`, `profileImage`, `city`, `state`, `country`, and `pincode`. The current signup controller validates `designation` but does not include it in the service input.

Login body:

```json
{
	"email": "asha@example.com",
	"password": "Password@123"
}
```

### Attendance

| Method | Endpoint | Auth | Purpose |
| --- | --- | --- | --- |
| POST | `/api/attendence/` | Bearer | Create today's check-in record; optional body field `remarks` |
| PATCH | `/api/attendence/check-out` | Bearer | Set today's checkout time and calculate working hours |
| GET | `/api/attendence/get-me` | Bearer | Return today's authenticated employee attendance |
| GET | `/api/attendence/get-All-attendence` | Bearer | Return authenticated employee attendance history |
| GET | `/api/attendence/allattendence/:employeeId` | None | Return attendance records for an employee ID |
| GET | `/api/attendence/all-attendence-allEmploye` | None | Aggregate today's attendance for employees with role `Employee` |

### Departments

| Method | Endpoint | Auth | Purpose |
| --- | --- | --- | --- |
| POST | `/api/department/create-department` | None | Create a department |
| GET | `/api/department/get-all-department` | None | List departments |
| GET | `/api/department/get-departmentby/:id` | None | Read one department |
| PATCH | `/api/department/edit-department/:id` | None | Update supplied department fields |
| DELETE | `/api/department/delete-department/:id` | None | Delete a department |

Create/update fields include `name`, `code`, `description`, `manager`, and `isActive`. The department service validates that an ID is present for read/update/delete operations and returns not-found errors when no document is found. The current department service is missing an `ApiError` import, which can fail its error branches at runtime.

### Designations

| Method | Endpoint | Auth | Purpose |
| --- | --- | --- | --- |
| POST | `/api/designation/` | None | Create a designation |
| GET | `/api/designation/` | None | List designations |
| GET | `/api/designation/:id` | None | Read one designation |
| PATCH | `/api/designation/:id` | None | Update supplied designation fields |
| DELETE | `/api/designation/:id` | None | Delete a designation |

Create/update fields include `title`, `code`, `description`, and `isActive`.

### Leave

| Method | Endpoint | Auth | Purpose |
| --- | --- | --- | --- |
| POST | `/api/leave/take-leave` | Bearer | Create a leave request for the authenticated employee |
| GET | `/api/leave/getleave/:employeeId` | None | List leave records for an employee ID |
| GET | `/api/leave/get-leave` | Bearer | List leaves for the authenticated employee |
| PATCH | `/api/leave/approveleave/:id` | Bearer | Approve a leave and store approver identity |
| PATCH | `/api/leave/rejectleave/:id` | Bearer | Reject a leave using body field `reason` |
| GET | `/api/leave/all-leave` | None | List all leaves with selected employee fields |

Leave creation expects `leaveType`, `startDate`, `endDate`, and `reason`. The service adds `totalDays`. No role check prevents any authenticated employee from reaching approval/rejection handlers.

### Tasks

| Method | Endpoint | Auth | Purpose |
| --- | --- | --- | --- |
| POST | `/api/task/create-task` | Bearer | Create a task using the authenticated employee business ID as creator |
| GET | `/api/task/get-all-task` | None | List tasks with selected assigned-employee fields |

Task fields include `title`, `description`, `assignedTo`, `priority`, `status`, `startDate`, `dueDate`, `estimatedHours`, and `tags`. The controller supplies defaults for invalid/missing optional values during response sanitization. The repository currently sorts by `createedAt`, which appears to be a typo for `createdAt`.

### Messages

| Method | Endpoint | Auth | Purpose |
| --- | --- | --- | --- |
| POST | `/api/message/chat` | Bearer | Persist a message and emit a receiver-room event |
| GET | `/api/message/:receiverId` | Bearer | Return both directions of the sender/receiver conversation |

The POST body requires `receiverId` and `message`. Socket.IO emits the `recive-message` event to the receiver's room after persistence.

### Response and error shapes

Successful controller responses commonly use:

```json
{
	"statusCode": 200,
	"success": true,
	"message": "...",
	"data": {}
}
```

Authentication responses also expose an access token. Error responses are formatted by the global error middleware with `success: false`, a status code, a message, and a development stack when configured by the current implementation.

## 10. Error Handling

- `ApiError` stores an HTTP status code, message, and unsuccessful state for expected application errors.
- `asyncHandler` forwards rejected controller promises to Express error middleware.
- `notFoundError` creates an error for unmatched URLs.
- `errorHandler` uses `err.statusCode` or falls back to HTTP 500 and returns the common error shape.
- Authentication failures use HTTP 401 for missing/invalid Bearer tokens or missing/invalid refresh tokens.
- Missing resources generally use HTTP 404.
- Duplicate email registration uses HTTP 409.
- Invalid request data or missing identifiers generally use HTTP 400.

The current not-found middleware assigns `error.statuscode` with a lowercase `c`, while the global handler reads `err.statusCode`. As a result, unmatched routes may fall back to HTTP 500 instead of 404. The error handler also checks `NODE_ENVNODE_ENV`, which appears to be a configuration-name typo.

## 11. Validation

`backend/src/validator/auth.validator.js` uses `express-validator`:

- Registration requires trimmed first/last names, valid email, Indian mobile phone format, complex password, valid gender/date, department/designation, non-negative salary, and address.
- Optional employment type and role values are restricted to the schema enums.
- Login requires a valid email and a password of at least eight characters.

The validators are attached to the registration and login routes. The inspected code does not call `validationResult(req)`, so validation errors are not explicitly collected and returned by a validation middleware.

Other domain services perform limited checks such as required IDs, leave date ordering, rejection reason presence, and task payload presence.

## 12. Environment Variables

The backend reads these names from `.env` through `dotenv`:

```env
PORT=
MONGO_URL=
BCRYPT_SALT_ROUNDS=
ACCESS_TOKEN_SECRET=
ReFRESH_TOKEN_SECRET=
NODE_ENV=
```

Only names are documented here. Do not commit actual values, tokens, database credentials, or secret keys. `PORT` defaults to `5000` in `src/config/env.js`, while the current local configuration used by the project runs on port `3000`.

## 13. Installation and Setup

Run installation separately for the backend and frontend:

```bash
cd backend
npm install

cd ../client
npm install
```

Create `backend/.env` with the required variable names shown above and provide a reachable MongoDB connection string in `MONGO_URL`. Keep secret values local and outside source control.

The frontend development proxy targets `http://localhost:3000` for `/api` requests. The backend and frontend should therefore be started on ports matching the current Vite configuration, or the proxy/socket configuration must be updated as a separate configuration change.

## 14. Running the Project

### Backend

From `backend/`:

```bash
npm run dev
npm start
npm test
```

- `npm run dev` runs `nodemon server.js`.
- `npm start` currently delegates to `npm run dev`; there is no separate production server script.
- `npm test` is the package's placeholder command and exits with `Error: no test specified`.

### Frontend

From `client/`:

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

- `npm run dev` starts Vite.
- `npm run build` creates the frontend production build.
- `npm run lint` runs ESLint.
- `npm run preview` previews the built frontend.

## 15. API Documentation and Swagger

Swagger is implemented in `backend/src/config/swagger.js` and mounted in `backend/src/app.js` at:

```text
http://localhost:<PORT>/api-docs/
```

The configuration uses OpenAPI 3.0, defines the ERP metadata, local server URL, reusable schemas, standard responses, and a `bearerAuth` security scheme. `swagger-jsdoc` scans `backend/src/routes/*.js` for `@swagger` comments. To update the documentation, update the route comments beside the existing endpoint registration and update reusable schemas/responses in `src/config/swagger.js` when necessary. Do not add duplicate API implementations for documentation purposes.

## 16. Development Guidelines

- Add a new module router under `backend/src/routes/` and mount it in `src/routes/inde.route.js`.
- Keep HTTP request/response orchestration in the module's controller.
- Keep business checks and workflow calculations in the module's service.
- Keep Mongoose queries and persistence in the module's repository.
- Keep schema fields, references, defaults, and enums in the module's schema/model.
- Add request validators under `src/validator/` and attach them to the route.
- Add cross-cutting request checks under `src/middleware/`.
- Use `ApiResponse` for successful response envelopes and `ApiError` for expected failures.
- Add Swagger comments to the existing route file so the generated specification stays aligned with actual routes.

These are conventions reflected by the existing structure; the current code has a few exceptions where controllers call repositories directly.

## 17. Future Improvements

The following are reasonable future work items based on the current implementation, not completed features:

- Add explicit role/permission middleware and protect administrative endpoints.
- Complete employee update/delete, profile, password, salary, payroll, payslip, holiday, and report workflows.
- Add task update/delete/status/assignment operations.
- Add frontend forms and API integration for incomplete modules.
- Add centralized `validationResult` handling.
- Align all Mongoose `ref` names with registered model names.
- Add attendance uniqueness rules for employee/day records.
- Add automated backend tests and replace the placeholder `npm test` script.
- Correct current configuration and field-name inconsistencies such as `statuscode`, `NODE_ENVNODE_ENV`, and `createedAt`.

## 18. Security Notes

- Never commit `.env`, JWT secrets, database credentials, or API keys.
- Passwords are hashed with `bcryptjs` and hidden from normal Employee queries.
- Refresh tokens use an HTTP-only cookie; production cookie behavior depends on `NODE_ENV`.
- Protected API calls require a Bearer access token.
- Several routes currently lack authentication middleware, and authenticated routes lack role checks. This is a security limitation that should be addressed before production deployment.
- Review CORS, Helmet, rate limiting, and request logging configuration before deployment; these packages are installed but are not all configured in the inspected `app.js`.
- Validate and sanitize all client input, including fields not currently covered by the authentication validators.

## 19. Project Summary

The repository currently provides a working foundation for employee authentication, attendance, leave, department/designation data, task creation/listing, and private chat through an Express/Mongoose backend with a React/Vite client. JWT authentication, Socket.IO messaging, and Swagger documentation are present. The next development stage is completing the unfinished employee, payroll, holiday, reporting, task-management, frontend, validation, and role-authorization work while resolving the documented model and middleware inconsistencies.