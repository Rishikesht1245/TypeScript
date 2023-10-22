import { NextFunction, Request, Response } from "express";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("getUsers");
  const users: string[] = ["a", "B", "C"];
  res.json(users);
};
