import {SETACTIVE} from '../Actions/SETACTIVE'
export const setActive = (state = 0, action)=>{
    if(action.type === SETACTIVE){
        return action.payload.id ;
    }
        
    return state;
}