import emailReducer, { passwordReducer } from './changeInputField'
import { combineReducers } from "redux";


const allReducers = combineReducers({
    emailText: emailReducer,
    passwordText: passwordReducer
});

export default allReducers;