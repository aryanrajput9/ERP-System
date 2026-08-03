import { Router } from 'express';
import { authContoller } from '../controller/auth.controller.js';
import { loginValidator, registerValidator } from '../validator/auth.validator.js';
import authMiddleware from '../middleware/auth.middileware.js';


const employeRouter = Router();

employeRouter.post("/register-employee", registerValidator, authContoller.sigup);
employeRouter.post("/login-employee", loginValidator, authMiddleware, authContoller.login);
employeRouter.get("/get-cuurent-employe", authMiddleware, authContoller.getMe);
employeRouter.get("/refresh-token", authContoller.reFreshTokens)


export default employeRouter