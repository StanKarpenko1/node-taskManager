import { NextFunction, Request, Response } from "express";


const notFound = (req: Request , res: Response, next: NextFunction ) => 
    res.status(404).json({
        status: "error",
        msg: `Route does not exist`
    });


module.exports = notFound