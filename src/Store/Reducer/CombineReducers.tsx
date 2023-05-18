import loginUserReducer from "./";
import {combineReducers}from 'redux';

const rootReducer=combineReducers({
    loginUserReducer,
});
export default rootReducer;