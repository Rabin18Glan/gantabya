import { SMTP_FROM, SMTP_HOST, SMTP_PASS, SMTP_PORT, SMTP_SECURE, SMTP_USER } from "../../const/envVariables";
import { logger } from "../../utils/logger.utils";
import nodemailer from 'nodemailer'
interface IEmailOptions {
    to: string;
    subject: string;
    html: string;
  }
  

export async function sendEmail({ to, subject, html }: IEmailOptions): Promise<void> {
    const transporter = 
    nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "99902069aa28e4",
        pass: "f3da0c99e681a2"
      }
    });
    
    // nodemailer.createTransport({
    //     host: SMTP_HOST,
    //     port: SMTP_PORT,
    //     secure: SMTP_SECURE,
    //     auth: {
    //       user:SMTP_USER,
    //       pass:SMTP_PASS,
    //     },
    //   });
    try {
      await transporter.sendMail({
        from: SMTP_FROM,
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