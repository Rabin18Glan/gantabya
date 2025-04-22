import express, { Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

import connectDB from './config/database';
import authRouter from './routes/userRoutes';
import vehicleRouter from './routes/vehicleRoutes';
import { errorHandler } from './middlewares/errorHandlermiddleware';

import chatRouter from './routes/chatRoutes';
import locationRouter from './routes/postlocation';

// Load environment variables
dotenv.config();

// Initialize app
const app = express();
const admin = express();
const mainRouter = Router();

// Application settings
app.set('env', 'development');

// Middleware
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'DELETE', 'UPDATE'],
}));
app.use(helmet());
app.disable('x-powered-by'); // Hide technology stack
app.disable('etag');         // Disable caching header

// Connect to MongoDB
connectDB();

// Admin sub-app
admin.on('mount', (parent) => {
  console.log('Admin app mounted');
  // console.log(parent); // Logs the parent app
});

admin.get('/', (req: Request, res: Response): void => {
  res.send('This is a message from the admin');
});
app.use('/admin', admin);

// API Routes Mounting
mainRouter.use('/user', authRouter);
mainRouter.use('/vehicle', vehicleRouter);
mainRouter.use('/chat',chatRouter);
app.use('/api/v1', mainRouter);
mainRouter.use('/location-post',locationRouter);

// Root route
app.get('/', (req: Request, res: Response): void => {
  res.send('Gantabya server is running!');
});

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000; // Default to 3000 if PORT is not set
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
