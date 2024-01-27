import { UserType } from "../types.d"

export const useFields = ( values: UserType ,isLoading: boolean ) => ([
    {
        id: 'id',
        type: 'text',
        placeholder: 'ID',
        defaultValue: values._id,
        isRequired: true,
        isDisabled: isLoading,
        error: ''
    },
    {
        id: 'name',
        type: 'text',
        placeholder: 'Nombre',
        defaultValue: values.name,
        isRequired: true,
        isDisabled: true,
        error: ''
    },
    {
        id: 'secondName',
        type: 'text',
        placeholder: 'Apellido paterno',
        defaultValue: values.secondName,
        isRequired: true,
        isDisabled: true,
        error: ''
    },
    {
        id: 'lastName',
        type: 'text',
        placeholder: 'Apellido materno',
        defaultValue: values.lastName,
        isRequired: true,
        isDisabled: true,
        error: ''
    }
])


export const initial = {
    "_id": 0,
    "name": "",
    "secondName": "",
    "lastName": ""
}