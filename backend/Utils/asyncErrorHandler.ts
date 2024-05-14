import { Request, Response, NextFunction } from 'express';

const asyncHandler = (func: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        func(req, res, next).catch(err => {
            console.error(err);
            next(err);
        });
    };
};

export default asyncHandler;
