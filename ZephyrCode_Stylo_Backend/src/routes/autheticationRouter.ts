import express from 'express'
import { registerContoller } from '../controller/authenticationController';
import { loginController } from '../controller/authenticationController';
const authenticationRouter = express.Router()

authenticationRouter.post('/register', registerContoller)
authenticationRouter.post('/login', loginController)

export default authenticationRouter;
