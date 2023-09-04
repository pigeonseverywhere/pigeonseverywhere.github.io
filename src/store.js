import { writable } from "svelte/store";

// used for variables that are edited by multiple - kind of like useContext
export const test_num = writable(0);
export const test_arr = writable([]);

// retrieved by importing
// three methods can be used on these variables
// set - sets a new value
// subscrble - listen to a value, like useRef
// update - update value , takes in val => {} where val is current val
// use $val for listening (basically subscribe but neater and available inline)