import { Store, Action } from "../Types/Redux"

const INITIAL_STATE:Store = {
    count : 0,
    index : 1,
}

export function reducer(state=INITIAL_STATE, action:Action){
  console.log(action.type);
    switch(action.type) {
      case 'INCREMENT': return {...state, count: state.count + 1 };
      case 'DECREMENT': return {...state, count: state.count - 1 };
      case 'RESET': return {...state, count: 0 };
      // unIdentified action, return dont change state
      default: return state;
    }
   
}