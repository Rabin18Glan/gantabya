import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/database';
import authRouter from './routes/userRoutes';

// Load environment variables
dotenv.config();

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();


app.use(cors({origin:'http://localhost:5173',
    credentials:true,
    methods:['GET','POST','DELETE','UPDATE']}))
// Route mounting
app.use('/api/v1/user', authRouter);

// Routes
app.get('/', (req: Request, res: Response): void => {
    res.send('Gantabya server is running!');
});

const PORT = process.env.PORT || 3000; // Default to 3000 if PORT is not set
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
