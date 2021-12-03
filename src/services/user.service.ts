import { assert } from "console"
import { UserRepresentation } from "../representations/user.representation"

export class UserService {
  findAll = async ():Promise<UserRepresentation[]> => {
    const users:UserRepresentation[] = [{id:1,name:'Rafa',age:100},{id:2,name:'Alex',age:1}]
    return users
  }
}
