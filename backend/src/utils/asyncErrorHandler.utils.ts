import { NextFunction } from "express";


module.exports = (func:Function)=>{
    return (req:Request,res:Response,next:NextFunction)=>{
        func(req,res,next).catch((err:any) => {
            console.log(req);
            next(err)});
        //this next(err) will call error handling function

    }
}