export const validateTimes = () => {
    const times = Number(localStorage.getItem('times')) | 0
    
    if(times === 3){
        return { disabled: true }
    }

    localStorage.setItem('times', (times + 1).toString())  
    return { disabled: false}
}

export const addMinutes = () => {
    return Date.now() + 1 * 60000;
}