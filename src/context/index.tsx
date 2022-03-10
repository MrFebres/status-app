import { createContext, Dispatch, FC, useContext, useLayoutEffect, useReducer } from "react"
import axios from "axios"

import { ApiClient, ApiClientAction } from "../types"
import { apiContextReducer, initialState } from "./api-reducer"
import { ENDPOINTS } from "../utils/constants"

const ApiContext = createContext<{state: ApiClient, dispatch: Dispatch<ApiClientAction>} | undefined>(undefined)

const ApiContextProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer(apiContextReducer, initialState)

  const getApiStatus = () => {
    Promise.all(ENDPOINTS.map(url => axios.get(url))).then((data)=> {
      console.log({data})
    });
  }

  useLayoutEffect(() => {
    getApiStatus()
  }, [])

  const value = {state, dispatch}

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>
}

const useApiContext = () => {
  const context = useContext(ApiContext);
  if (!context) throw new Error('useApiContext must be used within a ApiContextProvider');

  return context;
};

export {ApiContextProvider, useApiContext}