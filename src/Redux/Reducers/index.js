import {setActive} from './Reducer'
import {combineReducers} from 'redux';

 export default combineReducers ({
    activeId :setActive,
});
