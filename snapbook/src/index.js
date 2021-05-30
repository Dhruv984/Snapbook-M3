import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StateProvider} from './context_reducers/ImageContext'
import { initialState, reducer } from './context_reducers/ImageReducer';
import {LoginStateProvider} from './context_reducers/LoginContext';
import { initialLoginState, Loginreducer } from './context_reducers/LoginReducer';

ReactDOM.render(
  <React.StrictMode>
    <LoginStateProvider reducer={Loginreducer} initialState={initialLoginState}>
    <StateProvider reducer={reducer} initialState={initialState}>
     
       <App />
       </StateProvider>
    </LoginStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
