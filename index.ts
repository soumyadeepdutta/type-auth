import express, { json } from "express";
import { SigninRouter } from "./auth/routes/signin";
import { SignupRouter } from "./auth/routes/signup";

const app = express();

app.use(json());

app.use("/api/users/signin", SigninRouter);
app.use("/api/users/signup", SignupRouter);

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
