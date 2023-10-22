import express from "express";
import userRouter from "./routers/user";

const app = express();

// Using middlewares
app.use("/user", userRouter);

app.get("/", (req, res) => {
  console.log("hello");
  res.send("get Request");
});

app.listen(4000, () => {
  console.log("server is working");
});
