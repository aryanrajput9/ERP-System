import { Router } from 'express'
import leaveEmployeeController from '../module/leave/controller/leave.controller.js';
import authMiddleware from '../middleware/auth.middileware.js';

/**
 * @swagger
 * /api/leave/take-leave:
 *   post:
 *     summary: Submit a leave request
 *     tags: [Leave]
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: { $ref: '#/components/schemas/Leave' }
 *     responses:
 *       201: { description: Leave request created successfully }
 *       401: { $ref: '#/components/responses/Unauthorized' }
 * /api/leave/getleave/{employeeId}:
 *   get:
 *     summary: Get leave by employee ID
 *     tags: [Leave]
 *     parameters:
 *       - in: path
 *         name: employeeId
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Leave returned successfully }
 * /api/leave/get-leave:
 *   get:
 *     summary: Get the authenticated employee's leaves
 *     tags: [Leave]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Leaves returned successfully }
 *       401: { $ref: '#/components/responses/Unauthorized' }
 * /api/leave/approveleave/{id}:
 *   patch:
 *     summary: Approve a leave request
 *     tags: [Leave]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Leave approved }
 *       401: { $ref: '#/components/responses/Unauthorized' }
 * /api/leave/rejectleave/{id}:
 *   patch:
 *     summary: Reject a leave request
 *     tags: [Leave]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties: { reason: { type: string } }
 *     responses:
 *       200: { description: Leave rejected }
 *       401: { $ref: '#/components/responses/Unauthorized' }
 * /api/leave/all-leave:
 *   get:
 *     summary: Get all leave requests
 *     tags: [Leave]
 *     responses:
 *       200: { description: All leave requests returned successfully }
 */




const leaveRoute = Router();

// Leave creation, personal history, and approval/rejection receive the authenticated employee identity.

leaveRoute.post("/take-leave", authMiddleware, leaveEmployeeController.createLeave);

leaveRoute.get("/getleave/:employeeId", leaveEmployeeController.getLeaveById);

leaveRoute.get("/get-leave", authMiddleware, leaveEmployeeController.getMyLeaves)

leaveRoute.patch("/approveleave/:id", authMiddleware, leaveEmployeeController.approveLeaveById);


leaveRoute.patch("/rejectleave/:id", authMiddleware, leaveEmployeeController.rejectLeaveById);

leaveRoute.get("/all-leave", leaveEmployeeController.getAllLeave)




export default leaveRoute


// POST / api / leave
// GET / api / leave / me
// GET / api / leave
// GET / api / leave /: id
// PATCH / api / leave /: id / approve
// PATCH / api / leave /: id / reject
// DELETE / api / leave /: id