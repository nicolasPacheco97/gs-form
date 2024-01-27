import { Response } from "../../utils/types.d";
import { LogController } from "../controllers/log";
import { LogModel } from "../models/log";

export function logFormAction(query: {
    [x: string]: {
        value: string | null;
        isRequired: boolean;
        isDisabled: boolean;
    };
}) {
    const username = query['usuario'].value
    const password = query['contrasenia'].value

    const logController = new LogController({ logModel: new LogModel })
    return new Promise<Response>((resolve) => {
        setTimeout(async () => {
            if(password && username){
                const response = await logController.logValidation({ username, password}) as Response
                resolve(response)
            }
        }, 1000)
    });
}