import { Schema, model } from 'mongoose';
import { hash, compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {IUser} from '../types/auth.types';

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters long'],
    select: false // Don't include password in queries by default
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^\+?[\d\s-]{10,}$/, 'Please enter a valid phone number']
  },
  role: {
    type: String,
    enum: ['passenger', 'driver','admin'],
    required:[true,'Role is a required field']
  },

  
 
},
 {
  toJSON:{
    transform(doc,ret)
    {
      delete ret.password;
      delete ret.__v;
      delete ret.createdAt;
      delete ret.updatedAt;
    }
  },
  timestamps: true
});

// Hash password before saving
userSchema.pre<IUser>('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    this.password = await hash(this.password, 12);
    next();
  } catch (error) {
    next(error as Error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return compare(candidatePassword, this.password);
};

// // Generate JWT token
// userSchema.methods.generateAuthToken = function(): string {
//   return jwt.sign(
//     {
//       userId: this._id,
//       email: this.email,
//       role: this.role
//     },
//     process.env.JWT_SECRET || 'your-secret-key',
//     { expiresIn: '24h' }
//   );
// };

export default model<IUser>('User', userSchema);