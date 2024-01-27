import { useEffect, useState } from "react"
import { logFormAction } from "../../api/actions/log.action";
import { loginFields } from "../../utils/constants/loginFields.constants";
import { useForm } from "../../utils/customeHooks/useForm";
import PrimaryButton from "../Misc/Button/PrimaryButton";
import { validateTimes } from "../../helpers/validateTimes";
import { useTimesUp } from "../../utils/customeHooks/useTimesUp";
import { useNavigate } from "react-router-dom";


function LoginForm () {
    const navigate = useNavigate()
    const { currentFields, handleChangeFields } = useForm(loginFields)
    const [ error, setError] = useState('')
    const [ failAttends, setFailAttends ] = useState({ disabled: false })
    const { isCounting, timeRemaining } = useTimesUp(failAttends.disabled)
    const [ isLoading, setIsLoading ] = useState(false)


    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault()
        setError('')
        setIsLoading((prev: boolean) => !prev)
        logFormAction(handleChangeFields).then( (response) => {
            if(response.code === 401){
                setError(response.message)
                setFailAttends(validateTimes())
            }

            if(response.code === 200){
                navigate('/user')
            }
        }).finally( () => {
            setIsLoading((prev: boolean) => !prev)
        })
    }

    useEffect(() => {
        if(isCounting){
            setError(`Intentos fallidos, espera ${timeRemaining} para volver a intentar`)
        } else setFailAttends({ disabled: false })
    },[isCounting, timeRemaining])

    return <>
        <span className="text-2xl text-[#278252] block">
            Accede a
        </span>
        <span className="text-3xl text-[#278252] font-bold">
            tu cuenta en Línea
        </span>
        <form className="flex flex-col items-center gap-5 my-3" onSubmit={handleSubmit}>
            {currentFields.map( field => (field.props.children))}
            {error && <span className="text-red-500 font-light text-xs">{error}</span>}
            <PrimaryButton text={isLoading ? "Cargando..." : "INGRESAR"} type="submit" disabled={isCounting}/>
        </form>
    </>
}

export default LoginForm