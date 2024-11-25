import { Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  role: 'passenger' | 'driver'|'admin';
  generateAuthToken: () => string;
  comparePassword: (candidatePassword: string) => Promise<boolean>;
verifyToken:string|null;
  verified:boolean;
 resetPasswordCode:string|null;
 resetPasswordExpires:Date|null;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data?: {
    userId: string;
    token: string;
    name: string;
    phoneNumber: string;
    email: string;
  };
}

export interface JWTPayload {
  userId: string;
  email: string;
  role: string;
}