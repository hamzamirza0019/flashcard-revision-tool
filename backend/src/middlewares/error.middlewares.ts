import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/ApiError";

export const globalErrorHandler = (
    error: unknown,
    req: Request,
    res: Response,
    next: NextFunction
)=>{
    
    if(error instanceof ApiError){
        const statusCode = error.statusCode || 500
        return res.status(error.statusCode).json({
            success: false,
            message: error.message || 500
        });
    }
    console.log("UNEXPECTED ERROR", error);
    res.status(500).json({
        success: false,
        message: " Internal server Error!"
    });
}