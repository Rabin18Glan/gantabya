import { Router } from 'express';


const vehicleRouter = Router();

vehicleRouter.get('/all-info',(req,res)=>{res.json({message:"Hello"})})
export default vehicleRouter;
