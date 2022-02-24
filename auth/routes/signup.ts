import { Router, Request, Response } from "express";
import { createUser } from "../functions/create-user";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await createUser(username, password);
  return res.send(user);
});

export { router as SignupRouter };
