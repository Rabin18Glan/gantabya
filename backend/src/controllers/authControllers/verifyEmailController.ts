
import { Request,Response,NextFunction } from "express";
// import { verifyEmailSchema } from "../../validators/authValidator";
import User from "../../models/User";
import { ValidationError } from "../../utils/errors.utils";

 
 
export async function verifyEmail(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      // const { token } = verifyEmailSchema.parse(req.params);
      const {token} = req.params;
      console.log(req.params)

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