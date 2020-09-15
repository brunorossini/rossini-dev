import { Router, Request, Response } from "express";

import authMiddleware from "../middlewares/auth";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ msg: "ola mundo" });
});

router.use(authMiddleware);

router.get("/private", (req: Request, res: Response) => {
  res.json({ msg: "ok" });
});

export default router;
