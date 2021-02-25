import { Store, createStore, applyMiddleware } from "redux";

// import createSagaMiddleware from "redux-saga";

import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import { History } from "history";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { ApplicationState, createRootReducer } from "./redux";

export default function configureStore( history: History,  initialState: ApplicationState) {
  const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, createRootReducer(history))
  const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(routerMiddleware(history), thunk)
  );
  let persistor = persistStore(store)
  return { store, persistor }
}


