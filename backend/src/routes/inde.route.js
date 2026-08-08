import { Router } from 'express'
import attendanceRoute from './attendence.route.js';
import departmentRoute from './department.route.js';
import designationRoute from './designation.route.js';
import leaveRoute from './leave.route.js';
import employeeRouter from './employe.route.js';



const routes = Router();

routes.use("/employee", employeeRouter);
routes.use("/department", departmentRoute);
routes.use("/designation", designationRoute);
routes.use("/attendence", attendanceRoute);
routes.use("/leave", leaveRoute)

export default routes