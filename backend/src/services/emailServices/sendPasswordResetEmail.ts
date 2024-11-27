import { sendEmail } from "./sendEmail";

export async function sendPasswordResetEmail (email: string, resetCode: string): Promise<void> {
    await sendEmail({
      to: email,
      subject: 'Password Reset Code',
      html: `
        <h1>Password Reset</h1>
        <p>Your password reset code is: <strong>${resetCode}</strong></p>
        <p>This code will expire in 1 hour.</p>
        <p>If you didn't request this, please ignore this email.</p>
      `,
    });
  }