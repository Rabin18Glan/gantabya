import { Response, NextFunction } from 'express';
import CustomError from './../Utils/CustomError';

const devErrors = (res: Response, error: CustomError) => {
    res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
        stackTrace: error.stack,
        error: error
    });
};

const castErrorHandler = (err: any) => {
    const msg = `Invalid value ${err.path}: ${err.value}!`;
    return new CustomError(msg, 400);
};

const duplicateKeyErrorHandler = (error: any) => {
    const name = error.keyValue.name;
    const msg = `There is a movie with name ${name}. Please use another name`;
    return new CustomError(msg, 400);
};

const validationErrorHandler = (error: any) => {
    const errors = Object.values(error.errors).map((val: any) => val.message);
    const errorMessages = errors.join('. ');
    const msg = `Invalid input data: ${errorMessages}`;
    return new CustomError(msg, 400);
};

const handleTokenExpired = (err: any) => {
    return new CustomError('JWT has expired, Please login again later', 401);
};

const handleJwtError = (err: any) => {
    return new CustomError('JWT is invalid, please login again', 401);
};

const prodErrors = (res: Response, error: CustomError) => {
    if (error.isOperational) {
        res.status(error.statusCode).json({
            status: error.status,
            message: error.message
        });
    } else {
        res.status(500).json({
            status: 'error',
            message: 'Something went wrong! Please try again later'
        });
    }
};

export default (error: any, req: any, res: Response, next: NextFunction) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'error';

    if (process.env.NODE_ENV === 'development') {
        devErrors(res, error);
    } else if (process.env.NODE_ENV === 'production') {
        if (error.name === 'CastError') error = castErrorHandler(error);
        if (error.code === 11000) error = duplicateKeyErrorHandler(error);
        if (error.name === 'ValidationError') error = validationErrorHandler(error);
        if (error.name === 'TokenExpiredError') error = handleTokenExpired(error);
        if (error.name === 'JsonWebTokenError') error = handleJwtError(error);

        prodErrors(res, error);
    }
};
