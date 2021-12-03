import express, { Request, Response } from "express"
import serviceLoaders from "../services"

const userRouter = express.Router()
const userService = serviceLoaders.userService

userRouter.get("/", async (req: Request, res: Response) => {
  const users = await userService.findAll()
  res.status(200).send(users)
})

export { userRouter }
