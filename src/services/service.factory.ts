import { ServiceLoader } from "../interfaces/service.loader.interface"
import { UserService } from "./user.service"

export class ServiceFactory {
  loaders = (): ServiceLoader => {
    const userService = new UserService()
    return { userService }
  }
}
