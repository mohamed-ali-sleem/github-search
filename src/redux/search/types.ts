export interface Search {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  brand?: string;
  currentSearch: number;
}

export enum SearchActionTypes {
  FETCH_REQUEST = "FETCH_REQUEST",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_ERROR = "FETCH_ERROR",
  RESET_STORE = "RESET_STORE"
}

export interface SearchState {
  readonly loading: boolean;
  readonly data: Search[];
  readonly errors?: string;
  readonly count?: number;
}
