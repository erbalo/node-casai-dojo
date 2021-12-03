import express from "express"
import expressReqId from "express-request-id"
import { userRouter } from "./routes/user.router"

class App {
  public express: express.Application

  constructor() {
    this.express = express()
    this.init()
  }

  private init(): void {
    this.middleware()
  }

  private middleware(): void {
    const addRequestId = expressReqId()
    this.express.get("/greetings", (req, res) => {
      res.status(200).send("Hello World!")
    })
    this.express.use(addRequestId)
    this.express.use("/api/users", userRouter)
  }
}

export default new App().express
