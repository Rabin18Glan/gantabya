import { login,logout,register, resetPassword, verifyEmail } from '../controllers';
import { Router } from 'express';

const authRouter = Router();

authRouter.post('/login', login);
authRouter.post('/register', register);
authRouter.post('/verify-email',verifyEmail);
authRouter.post('/reset-password', resetPassword);
authRouter.get('/logout',logout)

export default authRouter;
