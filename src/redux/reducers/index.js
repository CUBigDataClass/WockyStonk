import {emailReducer, passwordReducer} from './login/changeInputField';
import nasdaqReducer, { dowReducer, spReducer } from './footer/footerReducer';
import searchReducer from './search/searchReducer'
import { combineReducers } from "redux";


const allReducers = combineReducers({
    emailText: emailReducer,
    passwordText: passwordReducer,
    dowIndex: dowReducer,
    nasdaqIndex: nasdaqReducer,
    spIndex: spReducer,
    searchInput: searchReducer,
});

export default allReducers;