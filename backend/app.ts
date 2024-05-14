import { NextFunction,Request,Response } from "express";
import { Expression } from "mongoose";
import CustomError from "./Utils/CustomError";

const express = require('express'); //return a function

const morgan = require('morgan');
const moviesRouter = require('./Routes/moviesRoute.js')
const authRouter = require('./Routes/authRouter.js')
// const CustomError = require('./Utils/CustomError.js')
const globalErrorHandler = require('./Controllers/globalErrorController.js')
let app = express() //return a object

const logger = function(req,res,next){
    console.log("Custom middleware called")
    next();
}

app.use(express.json()) //Use use to use middleware
if(process.env.NODE_ENV === 'development')
{
    app.use(morgan('dev'))
}

app.use(express.static('./Public'))
app.use(logger)
app.use((req,res,next) =>{
    req.requestedAt = new Date().toISOString();
    next();
})



//Route = http method or request + Url 
// route handling functions:

// ================================



app.use('/api/v1/movies',moviesRouter) //mounting router to some specific path
app.use('/api/v1/users',authRouter)


app.all('*',(req:Request,res:Response,next:NextFunction)=>{
// res.status(404).json({
//     status : "fail",
//     message : `Can't find ${req.originalUrl} on the server`
// })
// const err = new CustomError(`Can't find ${req.originalUrl} on the server`,404);
// next(err) // when we pass any arguement in next express will assume that some error has occured then call error handling function
    
});//this default route should always come at Last


app.use(globalErrorHandler)
module.exports= app;






