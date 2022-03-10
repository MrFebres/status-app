import { ApiActionType, ApiClient, ApiClientReducer } from "../types"

export const initialState: ApiClient = {
  results: undefined
}

export const apiContextReducer: ApiClientReducer = (state = initialState, action) => {
  switch (action.type) {
    case ApiActionType.SET_API_RESPONSE:
      return { results: action.payload?.results }
    default:
      return state;
  }
}