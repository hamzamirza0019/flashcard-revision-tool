import { Request, Response, NextFunction } from "express";

type Asyncfn = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<void>;

export const asyncHandler = (requestHandler: Asyncfn)=>{
    return (req: Request, res: Response, next:NextFunction)=>{
        Promise.resolve(requestHandler(req, res, next)).catch(next);
    }
};