import { AuthenticationError } from "../../utils/errors.utils";

export const extractTokenFromHeader= (header?: string): string =>{
    if (!header) {
      throw new AuthenticationError('No authorization header');
    }

    const [bearer, token] = header.split(' ');
    
    if (bearer !== 'Bearer' || !token) {
      throw new AuthenticationError('Invalid authorization header format');
    }

    return token;
  }

