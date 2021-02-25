import { NextFunction, Response } from "express";
import * as admin from "firebase-admin";

export default async (req: any, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader)
      return res.status(401).json({ error: "Token not provided" });

    const [, token] = authHeader.split(" ");
    const decodedToken = await admin.auth().verifyIdToken(token);

    req.locals = { user: decodedToken }

    next();
    return;
  } catch (error) {
    res.status(401).json({ error: "Token invalid" });
    return;
  }
};
