import { NextFunction, Request, Response } from 'express';
import User from '../models/User';
import { emailService } from '../services/email.service';
import { tokenService } from '../services/token.service';
import { AuthenticationError, ConflictError, NotFoundError, ValidationError } from '../utils/errors.utils';
import {
    loginSchema,
    registerSchema,
    resetPasswordRequestSchema,
    resetPasswordSchema,
    verifyEmailSchema
} from '../validators/auth.validator';



    //Register
  export async function register(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {

      console.log(req.body);
      const validatedData = registerSchema.parse(req.body);


      const emailVerified = await emailService.verifyEmail(validatedData.email);
      if(!emailVerified)
      {
        res.status(400).json({
            success:false,
            message:"Email doesn't exists try another"
        })

      }
      const existingUser = await User.findOne({ email: validatedData.email });
      if (existingUser) {
        throw new ConflictError('Email already registered');
      }



      const user = new User({
        ...validatedData,
        verified: false,
      });

      // Generate verification token
      const verificationToken = tokenService.generateEmailVerificationToken();
      user.verifyToken = verificationToken;
      
     

      // Send verification email
      await emailService.sendVerificationEmail(user.email, verificationToken);
      
      await user.save();

      const authToken = tokenService.generateAuthToken({
        userId: user._id,
        role: user.role,
      });
     
      res.status(201).json({
        success: true,
        message: 'Registration successful. Please verify your email.',
        data: {
          userId: user._id,
          token: authToken,
          name: user.name,
          email: user.email,
          phoneNumber: user.phoneNumber,
          role: user.role,
          verified: user.verified,
        },
      });
    } catch (error) {
      next(error);
    }
  }


//   Login
 export async function login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const validatedData = loginSchema.parse(req.body);
      
      const user = await User.findOne({ email: validatedData.email }).select('+password');
      if (!user) {
        throw new AuthenticationError('Invalid credentials');
      }

      const isPasswordValid = await user.comparePassword(validatedData.password);
      if (!isPasswordValid) {
        throw new AuthenticationError('Invalid credentials');
      }

      const token = tokenService.generateAuthToken({
        userId: user._id,
        role: user.role,
      });
      await user.save();

      res.status(200).json({
        success: true,
        message: 'Login successful',
        data: {
          userId: user._id,
          token,
          name: user.name,
          email: user.email,
          phoneNumber: user.phoneNumber,
          role: user.role,
          verified: user.verified,
        },
      });
    } catch (error) {
      next(error);
    }
  }


//   Verification of Email 
 export async function verifyEmail(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { token } = verifyEmailSchema.parse(req.body);

      const user = await User.findOne({ token });
      if (!user) {
        throw new ValidationError('Invalid or expired verification token');
      }

      user.verified = true;
      user.verifyToken = null;
      await user.save();

      res.status(200).json({
        success: true,
        message: 'Email verified successfully',
      });
    } catch (error) {
      next(error);
    }
  }



//   Password Reset request 
 export async function requestPasswordReset(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { email } = resetPasswordRequestSchema.parse(req.body);

      const user = await User.findOne({ email });
      if (!user) {
        throw new NotFoundError('User not found');
      }

      const resetCode = tokenService.generatePasswordResetCode();
      const resetExpires = new Date();
      resetExpires.setHours(resetExpires.getHours() + 1);

      user.resetPasswordCode = resetCode;
      user.resetPasswordExpires = resetExpires;
      await user.save();

      await emailService.sendPasswordResetEmail(email, resetCode);

      res.status(200).json({
        success: true,
        message: 'Password reset code sent to your email',
      });
    } catch (error) {
      next(error);
    }
  }


//   Reset Password 
 export  async function resetPassword(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { email, resetCode, newPassword } = resetPasswordSchema.parse(req.body);

      const user = await User.findOne({
        email,
        resetPasswordCode: resetCode,
        resetPasswordExpires: { $gt: new Date() },
      });

      if (!user) {
        throw new ValidationError('Invalid or expired reset code');
      }

      user.password = newPassword;
      user.resetPasswordCode = null;
      user.resetPasswordExpires = null;
      await user.save();

      res.status(200).json({
        success: true,
        message: 'Password reset successful',
      });
    } catch (error) {
      next(error);
    }
  }


//   Logout 

  export async function logout(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id}= req.body;
      if (!id) {
        throw new AuthenticationError();
      }

      await User.findByIdAndUpdate(id, { token: null });

      res.status(200).json({
        success: true,
        message: 'Logged out successfully',
      });
    } catch (error) {
      next(error);
    }
  }




