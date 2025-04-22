const PORT = process.env.PORT!;
const APP_URL = process.env.APP_URL!;

const NODE_ENV = process.env.NODE_ENV!;
const LOG_LEVEL = process.env.LOG_LEVEL!;
const MONGODB_URI = process.env.MONGODB_URI!||'mongodb://localhost:27017/gantabya';

const JWT_SECRET:string = process.env.JWT_SECRET!||'rabin';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

const VERIFY_EMAIL_SECRET = process.env.VERIFY_EMAIL_SECRET!;

const HUNTER_API_KEY = process.env.HUNTER_API_KEY! ;

const NEMOTRON_API_KEY = process.env.NEMOTRON_API_KEY;

const SMTP_HOST:string|undefined =NODE_ENV=='development'?'sandbox.smtp.mailtrap.io':process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT:number|undefined =NODE_ENV=='development'?587: parseInt(process.env.SMTP_PORT!) || 465;
const SMTP_SECURE:boolean|undefined =NODE_ENV=='development'?false: process.env.SMTP_SECURE=="true"?true:false || true;
const SMTP_USER:string|undefined =NODE_ENV=='development'? '99902069aa28e4':process.env.SMTP_USER || 'robinjsl321@gmail.com';
const SMTP_PASS:string|undefined =NODE_ENV=='development'?'f3da0c99e681a2': process.env.SMTP_PASS || 'jgerkdgsgkdxogwg';
const SMTP_FROM:string|undefined = process.env.SMTP_FROM || 'robinjsl321@gmail.com';

export {
  NEMOTRON_API_KEY,
  PORT,
  APP_URL,
  NODE_ENV,
  LOG_LEVEL,
  MONGODB_URI,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  VERIFY_EMAIL_SECRET,
  HUNTER_API_KEY,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_SECURE,
  SMTP_USER,
  SMTP_PASS,
  SMTP_FROM
};
