import { Response } from "../../utils/types.d";
import { UserController } from "../controllers/user";
import { UserModel } from "../models/user";

export function userFormAction(query: {
    [x: string]: {
        value: string | null;
        isRequired: boolean;
        isDisabled: boolean;
    };
}) {
    const id = query['id'].value

    const userController = new UserController({ userModel: new UserModel })
    return new Promise<Response>((resolve) => {
        setTimeout(async () => {
            if(id){
                const response = await userController.getUser(Number(id)) as Response
                resolve(response)
            }
        }, 1000)
    });
}