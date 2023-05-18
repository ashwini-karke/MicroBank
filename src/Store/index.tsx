import {createStore,compose} from 'redux'

import rootReducer from './Reducer/CombineReducers'

const store=createStore(rootReducer);
export default store;