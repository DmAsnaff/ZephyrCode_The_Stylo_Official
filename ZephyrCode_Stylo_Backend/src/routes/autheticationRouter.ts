import express from 'express'
import { registerContoller } from '../controller/authenticationController';

const authenticationRouter = express.Router()

authenticationRouter.post('/register', registerContoller)
authenticationRouter.post('/login')

export default authenticationRouter;
