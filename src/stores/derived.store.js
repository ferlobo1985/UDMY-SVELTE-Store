import { writable, derived } from "svelte/store"; 

export const count = writable(10);
export const modify = writable(5)

export const multiply = derived([count,modify],([$count,$modify])=>{
    return $modify + $count * 10
})