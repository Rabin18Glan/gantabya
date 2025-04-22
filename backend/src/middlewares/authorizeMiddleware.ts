import { NextFunction, Request, Response } from "express";
import { extractTokenFromHeader } from "../services";
import { AuthenticationError } from "../utils/errors.utils";

export async function authorize(req:Request,res:Response,next:NextFunction){

  try{
    const token = extractTokenFromHeader(req.get("Authorization"));
    if(!token)
    {
      throw new AuthenticationError();
       
    }
    next();
  }
  catch(err)
  {
    console.log("Some Error Occurred!");
    next(err);
  }

}
