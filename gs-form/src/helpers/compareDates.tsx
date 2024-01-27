export const compareDates = (firtsDate: Date, secondDate: Date) => {
  
    const [hourActual, minutesActual, secondsActual] = timeLabels(firtsDate)
    const [hourSession, minutesSession, secondsSession] = timeLabels(secondDate)
  
    
    let minutesSessionFix = 0
    let hourSessionFix = 0 
    
    const [ seconds, isMinutes ] = compareTimes(secondsActual, secondsSession)
    isMinutes ? minutesSessionFix = minutesSession - 1 : minutesSessionFix = minutesSession
    const [ minutes, isHour ] = compareTimes(minutesActual, minutesSessionFix)
    isHour ? hourSessionFix = hourSession - 1 : hourSessionFix = hourSession
    const hour = hourSessionFix - hourActual 
    
    console.log(`Tiempo restante: ${hour}:${minutes}:${seconds}`)
    
    return minutes.toString().padStart(2,'0') + ":" + seconds.toString().padStart(2,'0')
} 
  
  export const compareTimes = (firtsTime: number, secondTime: number) => {
    if(firtsTime > secondTime) return [(60 - firtsTime) + secondTime, true]
  
    return [secondTime - firtsTime, false]
}
  
  export const timeLabels = (date: Date) => {
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
  
    return [hour, minutes, seconds]
}