import { useCallback, useEffect, useRef, useState } from "react";
import { initial, useFields } from '../../utils/constants/userFields.constants';
import { useForm } from "../../utils/customeHooks/useForm";
import { userFormAction } from "../../api/actions/user.action";
import { Field, UserType } from '../../utils/types.d';


function UserForm () {
    const [ isLoading, setIsLoading ] = useState(false)
    const fileds = useFields(initial, isLoading) as Field[]
    const [ currentId, setCuerrentId ] = useState(0)

    const { currentFields, handleChangeFields, setHandleChangeFields } = useForm(fileds)
    const handleRef = useRef(handleChangeFields)

    const update = useCallback((res: UserType) => {
        setHandleChangeFields({
            ...handleRef.current,
            'name': {
                ...handleRef.current.name,
                value: res.name
            },
            'secondName': {
                ...handleRef.current.secondName,
                value: res.secondName
            },
            'lastName': {
                ...handleRef.current.lastName,
                value: res.lastName
            } 
        })
    },[handleRef, setHandleChangeFields])

    useEffect(() => {
        if(handleChangeFields['id'].value?.length === 5){
            setIsLoading(true)
            userFormAction(handleChangeFields).then( response => {
                if(response.code === 200 && response.response.length){
                    const res = response.response[0] as UserType
                    if(res) {
                        update(res)
                        setCuerrentId(res._id)
                        console.log(res)
                    }
                }
            }).finally(() => {
                setIsLoading(false)
            })
        }
    },[handleChangeFields, update])

    return <>
        <span className="text-2xl text-[#278252] block">
            Obten tu información
        </span>
        <span className="text-3xl text-[#278252] font-bold">
            ingresando tu ID
        </span>
        <div className="flex flex-col items-center gap-5 my-3">
            {currentFields.map( (field, index) => {
                if(index === 0) {
                    return <span key={"space"}>
                        {field.props.children}
                        <hr className="my-3"/>
                        {currentId !== 0 && <p className="text-center text-sm">ID: {currentId}</p>}
                    </span>
                }else {
                    return field.props.children
                }
            })}
        </div>
    </>
}

export default UserForm