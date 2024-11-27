import { generatePasswordResetCode, sendPasswordResetEmail } from "../..//services/index";
import User from "../../models/User";
import { NotFoundError, ValidationError } from "../../utils/errors.utils";
import { resetPasswordRequestSchema, resetPasswordSchema } from "../../validators/authValidator";
import { NextFunction, Response,Request } from "express";

export async function requestPasswordReset(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { email } = resetPasswordRequestSchema.parse(req.body);

      const user = await User.findOne({ email });
      if (!user) {
        throw new NotFoundError('User not found');
      }

      const resetCode = generatePasswordResetCode();
      const resetExpires = new Date();
      resetExpires.setHours(resetExpires.getHours() + 1);

      user.resetPasswordCode = resetCode;
      user.resetPasswordExpires = resetExpires;
      await user.save();

      await sendPasswordResetEmail(email, resetCode);

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