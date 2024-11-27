import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/database';
import authRouter from './routes/userRoutes';

// Load environment variables
dotenv.config();

const app = express();
const admin = express();
app.use(express.json({limit:"100kb"}));
app.use(express.urlencoded({extended:true}))
app.set('env','development');
// Connect to MongoDB
connectDB();

admin.on('mount',(parent)=>{
console.log("admin mounted")
    console.log(parent)
})

admin.get('/',(req,res)=>{
    res.send("this is a message from admin")
})

// Disabling the 'x-powered-by' header
app.disable('x-powered-by');

// Disabling the 'etag' header
app.disable('etag');

app.use('/admin', admin)
app.use(cors({origin:'http://localhost:5173',
    credentials:true,
    methods:['GET','POST','DELETE','UPDATE']}))
// Route mounting
app.use('/api/v1/user', authRouter);
app.use('/admin',admin)


// Routes
app.get('/', (req: Request, res: Response): void => {
    res.send('Gantabya server is running!');
});

const PORT = process.env.PORT || 3000; // Default to 3000 if PORT is not set
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
