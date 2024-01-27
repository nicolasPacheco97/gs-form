import { useEffect, useRef, useState } from "react"
import { addMinutes } from "../../helpers/validateTimes"
import { compareDates } from "../../helpers/compareDates"

const useTimesUp = ( isCounter: boolean) => {
    const [ timeRemaining, setTimeRemaining ] = useState('00:00')
    const [ ended, setEnded ] = useState(false)
    const interval = useRef<ReturnType<typeof setInterval> | null>(null)

    useEffect(() => {
        if(isCounter){
            setEnded(true)
            interval.current = setInterval(() => {
                const timesup = localStorage.getItem('timer')
                if(timesup){
                    const currentTime = Date.now()

                    setTimeRemaining(compareDates(new Date(currentTime), new Date(Number(timesup))))

                    if(currentTime > Number(timesup) && interval.current) cleanLS(interval.current)
                }else localStorage.setItem('timer', addMinutes().toString())
                
            }, 1000)
        }else if(!isCounter && interval.current) cleanLS(interval.current)
    },[isCounter])

    function cleanLS(intervalCurrent: ReturnType<typeof setInterval>){
        clearInterval(intervalCurrent)
        localStorage.removeItem('timer')
        localStorage.removeItem('times')
        setTimeRemaining('00:00')
        setEnded(false)
    }




    return { 
        timeRemaining,
        isCounting: ended
    }
}

export { useTimesUp }

