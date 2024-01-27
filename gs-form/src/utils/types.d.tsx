export interface Field {
    id: string,
    type: string,
    placeholder: string,
    defaultValue: string | null,
    isRequired: boolean,
    isDisabled: boolean,
}

export interface UserType {
    _id: number,
    name: string,
    secondName: string,
    lastName: string
}

export type Response = 
| { code: 200, message: string, response: string | UserType[]}
| { code: 401, message: string, response: null }