import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {searchRobots}  from './redux/reducers/searchReducer'
import {fetchReducer} from "./redux/reducers/fetchReducer";
import {createLogger} from 'redux-logger';

const logger = createLogger();
const reducers = combineReducers({searchRobots, fetchReducer});
const store = createStore(reducers,applyMiddleware(thunkMiddleware,logger) );
  
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
