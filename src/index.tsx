

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ApplicationState } from "./redux";
import { Store } from "redux";
import { History } from "history";
import { PersistGate } from 'redux-persist/integration/react'
import { createBrowserHistory } from "history";
import configureStore from "./configureStore";
import reportWebVitals from './reportWebVitals';
import { Persistor } from "redux-persist";
import "./index.css";
import App from "./App";
interface MainProps {
  store: Store<ApplicationState>;
  history: History;
  persistor: Persistor
}
const history = createBrowserHistory();

const initialState: any = {};
const store = configureStore(history, initialState).store;
const persistor = configureStore(history, initialState).persistor;

ReactDOM.render(

  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


