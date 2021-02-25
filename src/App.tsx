import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { ApplicationState } from "./redux";
import { Store } from "redux";
import { History } from "history";
import { ConnectedRouter } from "connected-react-router";
import { PersistGate } from 'redux-persist/integration/react'
import Routes from "./routes";

interface MainProps {
  store: Store<ApplicationState>;
  history: History;
  persistor: any
}

const App: React.FC<MainProps> = ({ store, history, persistor }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
