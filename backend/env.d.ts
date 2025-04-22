declare namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      JWT_SECRET: string;
      VERIFY_EMAIL_SECRET: string;
      NODE_ENV: "development" | "production" | "test";
      LOG_LEVEL: "info" | "warn" | "error" | "debug";
      MONGODB_URI: string;
      HUNTER_API_KEY: string;
      SMTP_HOST: string;
      SMTP_PORT: string;
      SMTP_SECURE: "true" | "false";
      SMTP_USER: string;
      SMTP_PASS: string;
      SMTP_FROM: string;
      APP_URL:string;
      JWT_EXPIRES_IN:string;
      CLIENT_URL:string;
      NEMOTRON_API_KEY:string;
    }
  }
  