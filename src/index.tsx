

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createBrowserHistory } from "history";
import configureStore from "./configureStore";
import reportWebVitals from './reportWebVitals';

const history = createBrowserHistory();

const initialState: any = {};
const store = configureStore(history, initialState).store;
const persistor = configureStore(history, initialState).persistor;

ReactDOM.render(
  
  <App store={store} history={history} persistor={persistor} />,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


