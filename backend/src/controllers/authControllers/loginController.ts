
import { NextFunction, Request, Response } from "express";
import { loginSchema } from "../../validators/authValidator";
import User from "../../models/User";
import { AuthenticationError } from "../../utils/errors.utils";
import { generateAuthToken } from "../../services";




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

      const token = generateAuthToken({
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