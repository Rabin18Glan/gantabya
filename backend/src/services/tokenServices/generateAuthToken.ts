import { JWT_EXPIRES_IN, JWT_SECRET } from '../../const/envVariables';
import jwt from 'jsonwebtoken'
interface ITokenPayload {
    userId: unknown;
    role: string;
  }

  
interface IVerifyTokenResult {
    valid: boolean;
    expired: boolean;
    decoded?: ITokenPayload;
  }
  

export const generateAuthToken = (payload: ITokenPayload): string=> {
    return jwt.sign(payload, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });
  }
  


 export const verifyToken= (token: string): IVerifyTokenResult =>{
    try {
      const decoded = jwt.verify(token, JWT_SECRET) as ITokenPayload;
      return {
        valid: true,
        expired: false,
        decoded,
      };
    } catch (error) {
      return {
        valid: false,
        expired: error instanceof jwt.TokenExpiredError,
      };
    }
  }