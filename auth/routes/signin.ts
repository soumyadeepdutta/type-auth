import { Router, Request, Response } from "express";
// import { matchPassword } from "../functions/match-password";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  // const passwordMatched = matchPassword(username, password);
  res.send("working");
});

export { router as SigninRouter };
