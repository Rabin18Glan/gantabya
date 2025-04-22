import { NextFunction, Request, Response } from "express";
import User from "../models/User";

export async function userDashboardController(req:Request,res:Response,next:NextFunction)
{

    const {userId} = req.body;
    const user = User.findById({_id:userId});
     


}