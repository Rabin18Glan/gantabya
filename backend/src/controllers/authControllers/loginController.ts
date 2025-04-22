
import { NextFunction, Request, Response } from "express";
import { loginSchema } from "../../validators/authValidator";
import User from "../../models/User";
import { AuthenticationError } from "../../utils/errors.utils";
import { generateAuthToken } from "../../services";




export async function login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const {email,password}= loginSchema.parse(req.body);
      console.log(req.body)
      const user = await User.findOne({ email}).select('+password');;
      if (!user) {
        throw new AuthenticationError('Email not found!');
      }

      console.log(password)
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        throw new AuthenticationError('Invalid Password!');
      }

      const token = generateAuthToken({
        userId: user._id,
        role: user.role,
      });
      await user.save();
      
      res.status(200).json({
        success: true,
        token,
        message: 'Login successful',
        userData: {
          userId: user._id,
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