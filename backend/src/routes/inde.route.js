import { Router } from 'express'
import employeRouter from './employe.route.js';
import departmentRoute from './department.route.js';



const routes = Router();


routes.use("/employe", employeRouter);
routes.use("/department", departmentRoute)


export default routes