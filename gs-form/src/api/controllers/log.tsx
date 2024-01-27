import { type LogModel } from '../models/log';

interface UserType {
    username: string
    password: string
}

type LogModelType = {
    logModel: LogModel
}

export class LogController {
    private logModel!: LogModel
    constructor({ logModel }: LogModelType){
        this.logModel = logModel
    }

    logValidation = async ( user: UserType ) => {
        const { username, password } = user
        const response = await this.logModel.validateUser({ username, password})
        return response
    }
}