import { NextFunction, Request, Response } from "express";
import { registerSchema } from "../../validators/authValidator";
import User from "../../models/User";
import { ConflictError } from "../../utils/errors.utils";
import { generateAuthToken, generateEmailVerificationToken, sendVerificationEmail, verifyEmailExists } from "../../services";



export async function register(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {

    console.log(req.body);
    const validatedData = registerSchema.parse(req.body);
    const emailVerified = await verifyEmailExists(validatedData.email);
    if (!emailVerified) {
      res.status(400).json({
        success: false,
        message: "Email doesn't exists try another"
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
    const verificationToken = generateEmailVerificationToken();
    user.verifyToken = verificationToken;



    // Send verification email
    await sendVerificationEmail(user.email, verificationToken);

    await user.save();

    

    res.status(201).json({
      success: true,
      message: 'Registration successful. Please verify your email.Check you email!',
    
    });
  } catch (error) {
    next(error);
  }
}