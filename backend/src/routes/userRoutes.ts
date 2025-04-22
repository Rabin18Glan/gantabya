import { login,logout,register, resetPassword, verifyEmail } from '../controllers';
import { Router } from 'express';

import { userDashboardController } from '../controllers/userDashboardController';
import { authorize } from '../middlewares/authorizeMiddleware';
import { chatAIController } from '../controllers/chatControllers/chatAiController';


const authRouter = Router();

authRouter.post('/login', login);
authRouter.post('/register', register);
authRouter.post('/verify-email',verifyEmail);
authRouter.post('/reset-password',authorize,resetPassword);
authRouter.get('/logout',authorize,logout);
authRouter.get('/dashboard',authorize,userDashboardController);

export default authRouter;
