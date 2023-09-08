import { writable } from "svelte/store";

// used for variables that are edited by multiple - kind of like useContext
export const theme = writable('dark');