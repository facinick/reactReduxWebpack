import {Action} from "../Types/Redux"

export const INCREMENT:string = "INCREMENT";
export const DECREMENT:string = "DECREMENT";
export const RESET:string = "RESET";

export const increment = ():Action => ({ type: INCREMENT });
export const decrement = ():Action => ({ type: DECREMENT });
export const reset = ():Action => ({ type: RESET });