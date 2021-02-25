import { Reducer } from "redux";
import { SearchActionTypes, SearchState } from "./types";

export const initialState: SearchState = {
  data: [],
  errors: undefined,
  loading: false,
  count: 0,
};

const reducer: Reducer<SearchState> = (state = initialState, action) => {
  switch (action.type) {
    case SearchActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case SearchActionTypes.RESET_STORE: {
      return initialState;
    }
    case SearchActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload, count: action.count };
    }
    case SearchActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, data: [], errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as SearchReducer };
