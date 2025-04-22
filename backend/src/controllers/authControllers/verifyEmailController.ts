
import { Request,Response,NextFunction } from "express";
import { verifyEmailSchema } from "../../validators/authValidator";
import User from "../../models/User";
import { ValidationError } from "../../utils/errors.utils";
import { generateAuthToken } from "../../services";

 
 
export async function verifyEmail(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { verificationToken } = verifyEmailSchema.parse(req.body);
      console.log(verificationToken)

      const user = await User.findOne({ verifyToken:verificationToken });
      if (!user) {
        throw new ValidationError('Invalid or expired verification token');
      }

      user.verified = true;
      user.verifyToken = null;
      await user.save();

      const authToken = generateAuthToken({
        userId: user._id,
        role: user.role,
      });

      res.status(200).json({
        success: true,
        message: 'Email verified successfully',
        token: authToken,
        userData: {
          userId: user._id,
          name: user.name,
          email: user.email,
          phoneNumber: user.phoneNumber,
          role: user.role,
        },
      });
    } catch (error) {
      next(error);
    }
  }