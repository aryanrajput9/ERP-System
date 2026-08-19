import { Router } from 'express'
import authMiddleware from '../middleware/auth.middileware.js';
import messageController from '../module/chat/controller/message.controller.js';

/**
 * @swagger
 * /api/message/chat:
 *   post:
 *     summary: Send a chat message
 *     tags: [Messages]
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: { $ref: '#/components/schemas/Message' }
 *     responses:
 *       201: { description: Message created successfully }
 *       401: { $ref: '#/components/responses/Unauthorized' }
 * /api/message/{receiverId}:
 *   get:
 *     summary: Get messages with a receiver
 *     tags: [Messages]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: receiverId
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Messages fetched successfully }
 *       401: { $ref: '#/components/responses/Unauthorized' }
 */



const messageRoute = Router();

// Both operations require authentication so sender identity and conversation access come from the verified token.

messageRoute.post("/chat", authMiddleware, messageController.createMessage)

messageRoute.get("/:receiverId", authMiddleware, messageController.getMessages);

export default messageRoute