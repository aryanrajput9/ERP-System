import { Router } from 'express'
import employeRouter from './employe.route.js';
import departmentRoute from './department.route.js';
import designationRoute from './designation.route.js';



const routes = Router();


routes.use("/employe", employeRouter);
routes.use("/department", departmentRoute);
routes.use("/designation", designationRoute)


export default routes