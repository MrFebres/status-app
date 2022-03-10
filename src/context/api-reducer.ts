import { ApiClient, ApiClientReducer } from "../types"

export const initialState: ApiClient = {
  results: undefined
}

export const apiContextReducer: ApiClientReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}