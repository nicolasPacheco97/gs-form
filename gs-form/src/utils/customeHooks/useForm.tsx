import { useState } from "react"
import { Field } from "../types.d"
import { setInputFields } from "../../helpers/setInputFields"

const useForm = ( initialValaues: Field[] ) => {
    const [ handleChangeFields, setHandleChangeFields ] = useState(
        initialValaues.map( field => {
            return {[field.id]: {
                value: field.defaultValue,
                isRequired: field.isRequired,
                isDisabled: field.isDisabled
            }} 
        })?.reduce((acc, item) => {
            return {...acc, ...item}
        },{})
    )

    const currentFields = initialValaues?.map( input => {
        return setInputFields(input, handleChangeFields, setHandleChangeFields )
    })

    return { 
        currentFields,
        handleChangeFields,
        setHandleChangeFields
    }
}

export { useForm }