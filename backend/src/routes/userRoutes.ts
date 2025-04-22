import { login,logout,register, resetPassword, verifyEmail } from '../controllers';
import { Router } from 'express';
import { authorize } from '../middlewares/authorizemiddleware';
import { userDashboardController } from '../controllers/userDashboardController';


const authRouter = Router();

authRouter.post('/login', login);
authRouter.post('/register', register);
authRouter.post('/verify-email',verifyEmail);
authRouter.post('/reset-password',authorize,resetPassword);
authRouter.get('/logout',authorize,logout);
authRouter.get('/dashboard',authorize,userDashboardController);

export default authRouter;
