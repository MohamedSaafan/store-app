import rootreducer from './Reducers/index';
import {createStore} from 'redux'
import {reducer} from './Reducers/Reducer'
export const store = createStore(reducer);