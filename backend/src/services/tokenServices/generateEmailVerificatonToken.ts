import crypto from 'crypto';
//Email Verification Token Generation
export const generateEmailVerificationToken = (): string =>{
    return crypto.randomBytes(32).toString('hex');
  }