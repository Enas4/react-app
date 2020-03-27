import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux";
import { Provider} from 'react-redux';
 import mainReducer from "/home/enas/redux-todo/src/Reducers/mainReducer.js";


const store = createStore(mainReducer);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

