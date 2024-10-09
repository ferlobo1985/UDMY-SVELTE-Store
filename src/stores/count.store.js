import { writable } from "svelte/store";

const count = writable(0);

export default {
    subscribe: count.subscribe,
    update:count.update,
    minusOne:()=>{
        count.update(prev=>prev-1)
    },
    addOne:()=>{
        count.update(prev=>prev+1)
    },
    setNew:(value)=>{
        count.set(value)
    }
};