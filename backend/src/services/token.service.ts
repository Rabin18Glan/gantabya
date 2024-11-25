import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { AuthenticationError } from '../utils/errors.utils';
import { ObjectId } from 'mongoose';

interface TokenPayload {
  userId: unknown;
  role: string;
}

interface VerifyTokenResult {
  valid: boolean;
  expired: boolean;
  decoded?: TokenPayload;
}

class TokenService {
  private readonly jwtSecret: string;
  private readonly jwtExpiresIn: string;
  
  constructor() {
    this.jwtSecret = process.env.JWT_SECRET!;
    this.jwtExpiresIn = process.env.JWT_EXPIRES_IN!;
  }

  //Generate JWT Token
  generateAuthToken(payload: TokenPayload): string {
    return jwt.sign(payload, this.jwtSecret, {
      expiresIn: this.jwtExpiresIn,
    });
  }
  

  //Extracting token from header
  extractTokenFromHeader(header?: string): string {
    if (!header) {
      throw new AuthenticationError('No authorization header');
    }

    const [bearer, token] = header.split(' ');
    
    if (bearer !== 'Bearer' || !token) {
      throw new AuthenticationError('Invalid authorization header format');
    }

    return token;
  }



//Verification of Token
  verifyToken(token: string): VerifyTokenResult {
    try {
      const decoded = jwt.verify(token, this.jwtSecret) as TokenPayload;
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

// =========================================
  //Email Verification Token Generation
  generateEmailVerificationToken(): string {
    return crypto.randomBytes(32).toString('hex');
  }

// ================================= ==========
  // Password Reset Token Code Generation
  generatePasswordResetCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }


}

export const tokenService = new TokenService();