import { Router } from 'express'
import taskController from '../module/task/controller/task.controller.js';
import authMiddleware from '../middleware/auth.middileware.js';



const taskRoute = Router();


taskRoute.post("/create-task", authMiddleware, taskController.createTask);
taskRoute.get("/get-all-task", taskController.getAllTask)



export default taskRoute
// POST / api / tasks
// GET / api / tasks
// GET / api / tasks /: id
// PUT / api / tasks /: id
// PATCH / api / tasks /: id / status