import { Router } from 'express'
import { attendanceController } from '../module/attendance/controller/attendence.controller.js';
import authMiddleware from '../middleware/auth.middileware.js';



const attendanceRoute = Router();


attendanceRoute.post("/", authMiddleware, attendanceController.createAttendance);

attendanceRoute.patch("/check-out", authMiddleware, attendanceController.checkOutController);

attendanceRoute.get("/get-me", authMiddleware, attendanceController.getTodayAttendance);

attendanceRoute.get("/get-All-attendence", authMiddleware, attendanceController.getAttendanceHistory)

attendanceRoute.get("/allattendence/:employeeId", attendanceController.getAttendanceByEmployeeId);


// POST / api / attendance / check -in
//     PATCH / api / attendance / check - out

// GET / api / attendance / me
// GET / api / attendance / history

// GET / api / attendance /: id

// DELETE / api / attendance /: id

export default attendanceRoute