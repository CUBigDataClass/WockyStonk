import React from 'react';
import ReactDOM from 'react-dom';
import Entry from './Entry';
import { createStore } from "redux";
import { Provider } from 'react-redux'
import allReducers from './redux/reducers'


//- create redux store 
const mystore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={mystore}>
  <Entry />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
