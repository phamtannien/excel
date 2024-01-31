import { request } from "../configs/api"

class UserService {
uploadFile(data){
   return request ({
    url: "/uploadfile",
    method: "POST",
    data: data,
   })
}

}
export const userService = new UserService()