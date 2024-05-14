import nodemailer from 'nodemailer';

interface EmailOptions {
    email: string;
    subject: string;
    message: string;
}

const sendEmail = async (option: EmailOptions) => {
    // CREATE A TRANSPORTER
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST as string,
        port: parseInt(process.env.EMAIL_PORT as string),
        auth: {
            user: process.env.EMAIL_USER as string,
            pass: process.env.EMAIL_PASSWORD as string
        }
    });

    // DEFINE EMAIL OPTIONS
    const emailOptions = {
        from: 'CineFlix support <support@cineflix.com>',
        to: option.email,
        subject: option.subject,
        text: option.message
    };

    await transporter.sendMail(emailOptions);
};

export default sendEmail;
