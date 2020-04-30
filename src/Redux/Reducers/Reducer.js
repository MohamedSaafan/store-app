import {SETACTIVE} from '../Actions/SETACTIVE'
export const reducer = (state = {activeId:1},action)=>{
    if(action.type === SETACTIVE){
        console.log('hi from the Reducer');
        return {activeId : action.id};
    }
        
    return state;
}