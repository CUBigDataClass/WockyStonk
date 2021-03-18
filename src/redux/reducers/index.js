import emailReducer, { passwordReducer } from './changeInputField';
import nasdaqReducer, { dowReducer, spReducer } from './footerReducer';
import { combineReducers } from "redux";


const allReducers = combineReducers({
    emailText: emailReducer,
    passwordText: passwordReducer,
    dowIndex: dowReducer,
    nasdaqIndex: nasdaqReducer,
    spIndex: spReducer
});

export default allReducers;