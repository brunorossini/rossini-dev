import { NextFunction, Response, Request } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
    res.set('Access-Control-Allow-Origin', '*');
    next();
    return;
};
