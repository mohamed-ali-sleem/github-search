import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { ApplicationState } from "./redux";
import { Store } from "redux";
import { History } from "history";
import { PersistGate } from 'redux-persist/integration/react'
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

interface MainProps {
  store: Store<ApplicationState>;
  history: History;
  persistor: any
}

const App: React.FC<MainProps> = ({ store, history, persistor }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
