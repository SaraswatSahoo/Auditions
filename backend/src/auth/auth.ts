import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function auth( req: Request, res: Response, next: NextFunction){
    
    const token = req.headers.token;

    if(process.env.JWT_SECRET){
        //@ts-ignore
        const decoded = jwt.verify( token, process.env.JWT_SECRET);
        if(decoded){
            //@ts-ignore
            req.rollNum = decoded.rollNum;
            next()
        } else {
            res.status(403).json({
                message: "You are not Signed In"
            })
        }
    } else {
        res.json({
            message: "JWT_SECRET not defined"
        })
    }
    

    
}
