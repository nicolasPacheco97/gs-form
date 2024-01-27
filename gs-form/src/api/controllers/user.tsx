import { type UserModel } from '../models/user';

interface typeUserModel {
    userModel: UserModel
}

export class UserController {
    private userModel!: UserModel
    constructor({ userModel }: typeUserModel ){
        this.userModel = userModel
    }

    getUser = async ( id: number ) => {
        const response = await this.userModel.getUser({ id })
        return response
    }
}