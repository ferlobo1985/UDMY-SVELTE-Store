import { writable } from "svelte/store";

export const brand = writable({
    model:'Fire',
    year:1980,
    color:'red'
})