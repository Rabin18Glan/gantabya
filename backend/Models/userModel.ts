import mongoose, { Schema, Document } from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

interface UserDocument extends Document {
    name: string;
    email: string;
    photo?: string;
    role: 'user' | 'admin';
    password: string;
    confirmPassword: string|undefined;
    passwordChangedAt?: Date;
    passwordResetToken?: string;
    passwordResetTokenEXP?: Date;

    comparePasswordInDB(pswd: string, pswdDB: string): Promise<boolean>;
    isPasswordChanged(JWTtimeStamp: number): boolean;
    createResetPasswordToken(): string;
}

const userSchema = new Schema<UserDocument>({
    name: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Please Enter your Email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please Enter a valid email']
    },
    photo: String,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: 8,
        select: false
    },
    confirmPassword: {
        type: String,
        required: [true, 'Please Confirm your password'],
        validate: {
            validator: function (val: string) {
                return val === this.password;
            },
            message: 'Password and Confirm Password do not match'
        }
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetTokenEXP: Date
});

userSchema.pre<UserDocument>('save', async function (next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPassword = undefined;
    next();
});

userSchema.methods.comparePasswordInDB = async function (pswd: string, pswdDB: string) {
    return await bcrypt.compare(pswd, pswdDB);
};

userSchema.methods.isPasswordChanged = function (JWTtimeStamp: number) {
    if (this.passwordChangedAt) {
        const passwordChangedTimeStamp = parseInt((this.passwordChangedAt.getTime() / 1000).toString(), 10);
        return JWTtimeStamp < passwordChangedTimeStamp;
    }
    return false;
};

userSchema.methods.createResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(32).toString('hex');
    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    this.passwordResetTokenEXP = Date.now() + 10 * 60 * 1000;
    return resetToken;
};

const User = mongoose.model<UserDocument>('User', userSchema);

export default User;
