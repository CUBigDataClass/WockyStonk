import changetextReducer from './changetext';
import num from './num';
import { combineReducers } from "redux";

// This is essentially a factory of reducer methods
const allReducers = combineReducers({
  changeText: changetextReducer,
  changeNumber: num
});

export default allReducers;