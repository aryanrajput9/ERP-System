import { Router } from 'express'
import taskController from '../module/task/controller/task.controller.js';
import authMiddleware from '../middleware/auth.middileware.js';

/**
 * @swagger
 * /api/task/create-task:
 *   post:
 *     summary: Create a task
 *     tags: [Tasks]
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: { $ref: '#/components/schemas/Task' }
 *     responses:
 *       201: { description: Task created successfully }
 *       401: { $ref: '#/components/responses/Unauthorized' }
 * /api/task/get-all-task:
 *   get:
 *     summary: Get all tasks
 *     tags: [Tasks]
 *     responses:
 *       200: { description: All tasks returned successfully }
 */



const taskRoute = Router();


taskRoute.post("/create-task", authMiddleware, taskController.createTask);
taskRoute.get("/get-all-task", taskController.getAllTask)



export default taskRoute
// POST / api / tasks
// GET / api / tasks
// GET / api / tasks /: id
// PUT / api / tasks /: id
// PATCH / api / tasks /: id / status