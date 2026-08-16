import { Router } from 'express'
import leaveEmployeeController from '../module/leave/controller/leave.controller.js';
import authMiddleware from '../middleware/auth.middileware.js';




const leaveRoute = Router();


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