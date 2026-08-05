import { Router } from 'express';
import { authContoller } from '../controller/auth.controller.js';
import { loginValidator, registerValidator } from '../validator/auth.validator.js';
import authMiddleware from '../middleware/auth.middileware.js';


const employeeRouter = Router();

employeeRouter.post("/register-employee", registerValidator, authContoller.sigup);
employeeRouter.post("/login-employee", loginValidator, authContoller.login);
employeeRouter.get("/get-cuurent-employe", authMiddleware, authContoller.getMe);
employeeRouter.get("/refresh-token", authContoller.reFreshTokens)


export default employeeRouter