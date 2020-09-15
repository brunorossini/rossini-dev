import { NextFunction } from "express";
import * as admin from "firebase-admin";
import { Request, Response } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader)
      return res.status(401).json({ error: "Token not provided" });

    const [, token] = authHeader.split(" ");
    await admin.auth().verifyIdToken(token);

    return next();
  } catch (error) {
    return res.status(401).json({ error: "Token invalid" });
  }
};
