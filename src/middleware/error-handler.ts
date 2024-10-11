import { Request, Response, NextFunction } from "express";
const { createCustomError, CustomError} = require ('../errors/custom-errors')


const errorHandlerMiddleware = (
    err: typeof CustomError,
    req: Request,
    res: Response,
    next: NextFunction,

) => {
    if (err instanceof CustomError){
        return res.status(err.statusCode).json( {msg: err.message} )
    }

     res.status(500).json({
        success: false,
        message: err.message
    });
};


module.exports = errorHandlerMiddleware
