import { SearchActionTypes } from "./types";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from 'axios';

export type AppThunk = ActionCreator<ThunkAction<void, null, null, Action<string>>>;

export const fetchRequest: AppThunk = (type:string, query: string, page: number, count: number ) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchSearchsRequest());
    axios.get(`https://api.github.com/search/${type}?q=${query}&page=${page}&per_page=${count}`)
      .then((response) => {
        const searchResult: any = response;
        // response.data is the Searchs
        dispatch(fetchSearchsSuccess(searchResult['data']['items'],searchResult['data']["total_count"]));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchSearchsFailure("server error please try again"));
      });
  };
};
export const resetStore = () => {
  return {
    type: SearchActionTypes.RESET_STORE,
  };
}

export const fetchSearchsRequest = () => {
  return {
    type: SearchActionTypes.FETCH_REQUEST
  };
};

export const fetchSearchsSuccess = (data:any,count:number) => {
  return {
    type: SearchActionTypes.FETCH_SUCCESS,
    payload: data,
    count: count
  };
};

export const fetchSearchsFailure = (error:any) => {
  return {
    type: SearchActionTypes.FETCH_ERROR,
    payload: error,
  };
};


