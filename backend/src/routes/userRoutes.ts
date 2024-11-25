import { Router } from 'express';
import { login,register} from '../controllers/auth.controller';




const authRouter = Router();

authRouter.post('/login', login);
authRouter.post('/register', register);

export default authRouter;
