
import { Request,Response,NextFunction } from "express";
import { AuthenticationError } from "../../utils/errors.utils";
import User from "../../models/User";

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
