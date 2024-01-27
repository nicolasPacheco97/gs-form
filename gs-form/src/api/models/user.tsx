import { UserType } from "../../utils/types.d";
import { userInfo } from "./Json/users";

interface IdType {
    id: number,
}

const users = userInfo as UserType[]

export class UserModel {
    async getUser ({ id }: IdType) {
        const user = users.filter( currentUser => currentUser._id === id)
        if(user) return { code: 200, message: 'ok', response: user}

        return { code: 401, message: 'No se encontró el usuario'} 
    }
}