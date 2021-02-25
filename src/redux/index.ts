import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { SearchReducer } from "./search/reducer";
import { SearchState } from "./search/types";
import { RouterState } from "connected-react-router";

export interface ApplicationState { 
  search: SearchState;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    search: SearchReducer,
    router: connectRouter(history)
  });
