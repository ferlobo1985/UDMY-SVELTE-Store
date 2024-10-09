import { readable } from "svelte/store";

let time = 0;
const timer = readable(0,(set)=>{
    const timerInterval = setInterval(()=>{
        time++
        set(time)
    },1000);

    return () => {
        time = 0;
        set(time)
        clearInterval(timerInterval)
    }
})

export default timer;