import { Router } from 'express'
import { designationController } from '../module/designation/controller/designation.controller.js';

/**
 * @swagger
 * /api/designation:
 *   post:
 *     summary: Create a designation
 *     tags: [Designations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: { $ref: '#/components/schemas/Designation' }
 *     responses:
 *       201: { description: Designation created successfully }
 *       400: { $ref: '#/components/responses/BadRequest' }
 *   get:
 *     summary: Get all designations
 *     tags: [Designations]
 *     responses:
 *       200: { description: Designations fetched successfully }
 * /api/designation/{id}:
 *   get:
 *     summary: Get a designation by ID
 *     tags: [Designations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Designation fetched successfully }
 *       404: { $ref: '#/components/responses/NotFound' }
 *   patch:
 *     summary: Update a designation
 *     tags: [Designations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: { $ref: '#/components/schemas/Designation' }
 *     responses:
 *       200: { description: Designation updated successfully }
 *       404: { $ref: '#/components/responses/NotFound' }
 *   delete:
 *     summary: Delete a designation
 *     tags: [Designations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Designation deleted successfully }
 *       404: { $ref: '#/components/responses/NotFound' }
 */


const designationRoute = Router();


designationRoute.post(
    "/",
    designationController.createDesignationController
);

designationRoute.get(
    "/",
    designationController.getAllDesignationController
);

designationRoute.get(
    "/:id",
    designationController.getDesignationByIdController
);

designationRoute.patch(
    "/:id",
    designationController.editDesignationByIdController
);

designationRoute.delete(
    "/:id",
    designationController.deleteDesignationByIdController
);




// POST    /api/designation
// GET     /api/designation
// GET     /api/designation/:id
// PATCH   /api/designation/:id
// DELETE  /api/designation/:id

export default designationRoute