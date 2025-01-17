import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
const { createCustomError, CustomError} = require ('../errors/custom-errors')
import { CustomErrorType } from '../errors/custom-errors';

const errorHandlerMiddleware  = (
    err: CustomErrorType,
    req: Request,
    res: Response,
    next: NextFunction, 

) => {
    
    const errorStatus = err.statusCode || 500;
    
    // if (err instanceof CustomError){
    if (errorStatus !== 500) { 
        return res.status(errorStatus).json( {msg: err.message} )
    }

     res.status(errorStatus).json({
        success: false,
        message: err.message
    });
};


module.exports = errorHandlerMiddleware
