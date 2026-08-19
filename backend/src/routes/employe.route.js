import { Router } from 'express';
import { authContoller } from '../controller/auth.controller.js';
import { loginValidator, registerValidator } from '../validator/auth.validator.js';
import authMiddleware from '../middleware/auth.middileware.js';

/**
 * @swagger
 * /api/employee/register-employee:
 *   post:
 *     summary: Register an employee
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EmployeeRegistration'
 *     responses:
 *       201: { description: Employee created successfully }
 *       400: { $ref: '#/components/responses/BadRequest' }
 * /api/employee/login-employee:
 *   post:
 *     summary: Log in an employee
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: { $ref: '#/components/schemas/Login' }
 *     responses:
 *       200: { description: Employee login successful }
 *       401: { $ref: '#/components/responses/Unauthorized' }
 * /api/employee/get-cuurent-employe:
 *   get:
 *     summary: Get the authenticated employee
 *     tags: [Employees]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Employee data fetched successfully }
 *       401: { $ref: '#/components/responses/Unauthorized' }
 * /api/employee/refresh-token:
 *   get:
 *     summary: Refresh the access token using the refresh cookie
 *     tags: [Authentication]
 *     responses:
 *       200: { description: Access token generated successfully }
 *       401: { $ref: '#/components/responses/Unauthorized' }
 * /api/employee/get-all-employe:
 *   get:
 *     summary: Get all employees with the Employee role
 *     tags: [Employees]
 *     responses:
 *       200: { description: Employees returned successfully }
 */


const employeeRouter = Router();

// Registration, login, and refresh are public; the current-employee endpoint requires a bearer token.
employeeRouter.post("/register-employee", registerValidator, authContoller.sigup);
employeeRouter.post("/login-employee", loginValidator, authContoller.login);
employeeRouter.get("/get-cuurent-employe", authMiddleware, authContoller.getMe);
employeeRouter.get("/refresh-token", authContoller.reFreshTokens);

employeeRouter.get("/get-all-employe", authContoller.getAllEmploye);

employeeRouter.patch("/department/:id", authContoller.assignDepartment)


export default employeeRouter