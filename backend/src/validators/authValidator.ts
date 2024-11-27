import { z } from 'zod';

export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  // .regex(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  //   'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
  // );

export const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string(),
});

export const registerSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters'),
  email: z.string().email('Invalid email format'),
  password: passwordSchema,
  phoneNumber: z.string()
    .regex(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
  role: z.enum(['driver', 'passenger','admin']),
});

export const resetPasswordRequestSchema = z.object({
  email: z.string().email('Invalid email format'),
});

export const resetPasswordSchema = z.object({
  email: z.string().email('Invalid email format'),
  resetCode: z.string().length(6, 'Reset code must be 6 digits'),
  newPassword: passwordSchema,
});

export const verifyEmailSchema = z.object({
  token: z.string(),
});