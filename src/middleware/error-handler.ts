import { Request, Response, NextFunction } from "express";
const { createCustomError, CustomError} = require ('../errors/custom-errors')


const errorHandlerMiddleware = (
    err: typeof CustomError,
    req: Request,
    res: Response,
    next: NextFunction,

) => {
    if (err instanceof createCustomError){
        return res.status(err.statusCode).json( {msg: err.message} )
    }

     res.status(500).json({
        success: false,
        message: `Something went wrong`
    });
};

module.exports = errorHandlerMiddleware
