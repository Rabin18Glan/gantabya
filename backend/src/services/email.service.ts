import nodemailer from 'nodemailer';
import { logger} from '../utils/logger.utils';
import axios from 'axios';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      service:"gmail",
      port: parseInt(process.env.SMTP_PORT!),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendEmail({ to, subject, html }: EmailOptions): Promise<void> {
    try {
      await this.transporter.sendMail({
        from: process.env.SMTP_FROM||"robinjsl321@gmail.com",
        to,
        subject,
        html,
      });
      logger.info(`Email sent successfully to ${to}`);
    } catch (error) {
      logger.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  }



  async verifyEmail(email:string){
    
    const apiKey = process.env.HUNTER_API_KEY || "8e5605f59dc9a51f4f50d7bfaac2604bd40aa4c1"; // Replace with your API key
  const url = `https://api.hunter.io/v2/email-verifier?email=${email}&api_key=${apiKey}`;

  try {
    const response = await axios.get(url);
   if(response.data.data.status=="valid"){
    return true;
   }
  
   return false;

  } catch (error) {
    console.error('Error verifying email:', error);
    return 'error';
  }

  }



  async sendVerificationEmail(email: string, token: string): Promise<void> {
    const verificationLink = `${process.env.APP_URL}/verify-email?token=${token}`;
    
    await this.sendEmail({
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




  async sendPasswordResetEmail(email: string, resetCode: string): Promise<void> {
    await this.sendEmail({
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
}

export const emailService = new EmailService();