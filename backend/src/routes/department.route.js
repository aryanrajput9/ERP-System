import express from 'express'
import { departmentController } from '../module/department/controller/department.controller.js';

/**
 * @swagger
 * /api/department/create-department:
 *   post:
 *     summary: Create a department
 *     tags: [Departments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: { $ref: '#/components/schemas/Department' }
 *     responses:
 *       201: { description: Department created successfully }
 *       400: { $ref: '#/components/responses/BadRequest' }
 * /api/department/get-all-department:
 *   get:
 *     summary: Get all departments
 *     tags: [Departments]
 *     responses:
 *       200: { description: Departments fetched successfully }
 * /api/department/get-departmentby/{id}:
 *   get:
 *     summary: Get a department by ID
 *     tags: [Departments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Department fetched successfully }
 *       404: { $ref: '#/components/responses/NotFound' }
 * /api/department/edit-department/{id}:
 *   patch:
 *     summary: Update a department
 *     tags: [Departments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: { $ref: '#/components/schemas/Department' }
 *     responses:
 *       200: { description: Department updated successfully }
 *       404: { $ref: '#/components/responses/NotFound' }
 * /api/department/delete-department/{id}:
 *   delete:
 *     summary: Delete a department
 *     tags: [Departments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Department deleted successfully }
 *       404: { $ref: '#/components/responses/NotFound' }
 */


const departmentRoute = express.Router();

// Department CRUD routes currently use the middleware boundary defined by each handler registration.

departmentRoute.post("/create-department", departmentController.createDepartmentController)
departmentRoute.get("/get-all-department", departmentController.getAllDepartmentsController)
departmentRoute.get("/get-departmentby/:id", departmentController.getDepartmentByIdController)
departmentRoute.patch("/edit-department/:id", departmentController.editDepartmentByIdController)
departmentRoute.delete("/delete-department/:id", departmentController.deleteDepartmentByIdController)


// POST / api / department
// GET / api / department
// GET / api / department /: id
// PATCH / api / department /: id 
// DELETE / api / department /: id


export default departmentRoute
