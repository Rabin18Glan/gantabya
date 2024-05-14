import { NextFunction,Request,Response } from "express";

const CustomError = require('../Utils/CustomError');
const User = require('../Models/userModel');
const asyncErrorHandler = require('../Utils/asyncErrorHandler')
const jwt = require('jsonwebtoken')
const util = require('util')
const sendEmail = require('../Utils/email')
// const crypto = require('crypto')

const signToken = id =>{

return jwt.sign({id},process.env.SECRET_STR,
    {
      expiresIn: process.env.LOGIN_EXPIRES
    });
}


exports.signup =asyncErrorHandler( async (req:Request,res:Response,next:NextFunction)=>{
    const newUser = await User.create(req.body);
    const token = signToken(newUser._id);
    res.status(201).json({
        status: 'success',
        token,
        data:{
            name : req.body.name,
            email:req.body.email,
        }
    })
}
)

exports.login = asyncErrorHandler(async(req:Request,res:Response,next:NextFunction)=>{
    console.log(req);
    // const {email,password} = req.body //object destructuring
    const email = req.body.email;
    const password = req.body.password;

    if(!email||!password)
    {
        const error = new CustomError('Please provide email ID & password for login in',400);
        return next(error);//calling global error handling middleware
    }

    //Checking if use exists
    const user = await User.findOne({email}).select('password email name')//if ES6 if property and variable name is same then we don't have to specify both
    if(!user || !(await user.comparePasswordInDB(password,user.password)))
    {
        const error = new CustomError('Incorrect email or password',400)
        return next(error)
    }

  
    const name = user.name;

const token=signToken(user._id)

    res.status(200).json({
        status : "success",
        token,
        data:{
            name: name,
           email:email,

        }
    })
})


exports.protect = asyncErrorHandler(async(req:Request,res:Response,next:NextFunction)=>{

//1.Read the token & check if it exists
const testToken = req.headers.authorization;
let token;
if(testToken && testToken.startsWith('Bearer'))
{
   token = testToken.split(' ')[1]
}

if(!token)
{
   next(new CustomError('You are not authorized',400))
}


//2.validate the token
//in jwt we have a method
const decodedtoken = await util.promisify(jwt.verify)(token,process.env.SECRET_STR)

console.log(decodedtoken)


//3.If the uesr exists
const user = await User.findById(decodedtoken.id)
if(!user){
    const error = new CustomError('The user doesnot exists',401);
    next(error)
}


//4.if the user changed password after the token was issued
const isPasswordChanged = await user.isPasswordChanged(decodedtoken.iat);
if(isPasswordChanged){
    const error = new CustomError("The password is changed recently",401)
    return next(error)
}
//5. Allow the user to access route
req.user = user //assingning current user to request object

next();
});


exports.restrict = (role)=>{
    return (req,res,next)=>{
        if(req.user.role !== role){
            const error = new CustomError("You do not have permission to perform this action",403);
            next(error);
        }
        next();
    }
}

// For multiple access role 
// exports.restrict = (...role)=>{
//     return (req,res,next)=>{
//         if(!role.includes(req.user.role)){
//             const error = new CustomError("You do not have permission to perform this action",403);
//             next(error);
//         }
//         next();
//     }
// }

exports.forgotPassword = asyncErrorHandler( async (req:Request,res:Response,next:NextFunction)=>{
    //1.GET USER BASED ON POSTED EMAIL
    const user = await User.findOne({email:req.body.email});
    if(!user)
    {
        const error = new CustomError('We could not find the user with the given email',404);
        next(error);
    }
    //2.GENERATE A RANDOM RESET TOKEN
    const resetToken = user.createResetPasswordToken();
    await user.save({validateBeforeSave:false});
    //3.SEND THE TOKEN BACK TO THE USER EMAIL
    const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/user/resetPassword/${resetToken}`
    const message = `we have received a password reset request. Please use the below link to reset password\n\n${resetUrl}\n\nThis reset Password link will only valid for 10 minutes`

    try{
        await sendEmail(
            {
                email:user.email,
                subject:'Password change request received',
                message:message
            }
        );

        res.status(200).json({
            status: "success",
            message:'Password reset email is sent'
        })
        next();
    }
    catch(err){
        user.passwordResetToken = undefined;
        user.passwordResetTokenEXP= Date;
        user.save({validateBeforeSave: false});

        return next(new CustomError('There was an error sending password reset email. Please try again later',500))
    }

}
);

exports.resetPassword = asyncErrorHandler(async(req:Request,res:Response,next:NextFunction)=>{
    //1. IF the user exists with the given token and token has not expired
    const token = crypto.createHash('sha256').update(req.params.token).digest('hex')
    const user = await User.findOne({passwordResetToken: token,passwordResetTokenEXP:{$gt:Date.now()}}) //selecting the user according to passwordreset token
if(!user)
{
    const error = new CustomError('Token is invalid or has expired')
    next(error);
}


//2. resseting the user password
user.password = req.body.password;
user.confirmPassword = req.body.confirmPassword;
user.passwordResetToken = undefined;
user.passwordResetTokenEXP = undefined;
user.passwordChangedAt = Date.now();

user.save();

//3.Login automatically
const logintoken=signToken(user._id)

    res.status(200).json({
        status : "success",
        token : logintoken
    })
})