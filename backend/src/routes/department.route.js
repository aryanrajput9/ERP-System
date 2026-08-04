import express from 'express'
import { departmentController } from '../module/department/controller/department.controller.js';


const departmentRoute = express.Router();


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
