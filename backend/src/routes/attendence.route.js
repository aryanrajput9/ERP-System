import { Router } from 'express'
import { attendanceController } from '../module/attendance/controller/attendence.controller.js';
import authMiddleware from '../middleware/auth.middileware.js';

/**
 * @swagger
 * /api/attendence:
 *   post:
 *     summary: Check in for today
 *     tags: [Attendance]
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               remarks: { type: string }
 *     responses:
 *       201: { description: Check in successful }
 *       401: { $ref: '#/components/responses/Unauthorized' }
 * /api/attendence/check-out:
 *   patch:
 *     summary: Check out for today
 *     tags: [Attendance]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Check out successful }
 *       401: { $ref: '#/components/responses/Unauthorized' }
 * /api/attendence/get-me:
 *   get:
 *     summary: Get today's attendance
 *     tags: [Attendance]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Today's attendance fetched successfully }
 *       401: { $ref: '#/components/responses/Unauthorized' }
 * /api/attendence/get-All-attendence:
 *   get:
 *     summary: Get the authenticated employee attendance history
 *     tags: [Attendance]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Attendance history fetched successfully }
 *       401: { $ref: '#/components/responses/Unauthorized' }
 * /api/attendence/allattendence/{employeeId}:
 *   get:
 *     summary: Get attendance by employee ID
 *     tags: [Attendance]
 *     parameters:
 *       - in: path
 *         name: employeeId
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Employee attendance fetched successfully }
 *       404: { $ref: '#/components/responses/NotFound' }
 * /api/attendence/all-attendence-allEmploye:
 *   get:
 *     summary: Get today's attendance for all employees
 *     tags: [Attendance]
 *     responses:
 *       200: { description: Employee attendance returned successfully }
 */



const attendanceRoute = Router();

// Self-service attendance routes use authMiddleware; the employee-wide queries remain exposed as currently wired.

attendanceRoute.post("/", authMiddleware, attendanceController.createAttendance);

attendanceRoute.patch("/check-out", authMiddleware, attendanceController.checkOutController);

attendanceRoute.get("/get-me", authMiddleware, attendanceController.getTodayAttendance);

attendanceRoute.get("/get-All-attendence", authMiddleware, attendanceController.getAttendanceHistory)

attendanceRoute.get("/allattendence/:employeeId", attendanceController.getAttendanceByEmployeeId);

attendanceRoute.get("/all-attendence-allEmploye", attendanceController.getAllEmployeeAttendence)



// POST / api / attendance / check -in
//     PATCH / api / attendance / check - out

// GET / api / attendance / me
// GET / api / attendance / history

// GET / api / attendance /: id

// DELETE / api / attendance /: id

export default attendanceRoute