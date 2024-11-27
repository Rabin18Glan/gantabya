import { APP_URL } from "../../const/envVariables";
import { sendEmail } from "./sendEmail";

export async function sendVerificationEmail(email: string, token: string): Promise<void> {
    const verificationLink = `${process.env.CLIENT_URL}/register/verify-email?token=${token}`;
    console.log(verificationLink)
    
    await sendEmail({
      to: email,
      subject: 'Verify Your Email',
      html: `
        <h1>Welcome!</h1>
        <p>Please verify your email by clicking the link below:</p>
        <a href="${verificationLink}">Verify Email</a>
        <p>This link will expire in 24 hours.</p>
      `,
    });
  }