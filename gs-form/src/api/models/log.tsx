import { logInfo } from "./Json/log"

interface Validate {
    username: string,
    password: string
}

const log = logInfo as Validate[]

export class LogModel {
    async validateUser ({ username , password }: Validate) {
        const user = log.find( currentUser => currentUser.username === username)
        if(user?.password === password) return { code: 200, message: 'Ok', response: 'ok'}

        return { code: 401, message: 'Usuario o contraseña incorrecta', response: null}
    }
}