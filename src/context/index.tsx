import { createContext, Dispatch, FC, useContext, useEffect, useLayoutEffect, useReducer } from "react"

import { ApiActionType, ApiClient, ApiClientAction, ApiResponse } from "../types"
import { apiContextReducer, initialState } from "./api-reducer"
import { ENDPOINTS, REFETCH_INTERVAL } from "../utils/constants"

const ApiContext = createContext<{state: ApiClient, dispatch: Dispatch<ApiClientAction>} | undefined>(undefined)

const ApiContextProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer(apiContextReducer, initialState)

  const getApiStatus = async () => {
    const allResponses = await Promise.all(ENDPOINTS.map(url => fetch(url)))

    const results = new Map<string, ApiResponse>()

    for (const response of allResponses) {
      const assetName = response.url.split('/')[3]
      let result: any
      if (response.ok) {
        const translatedResponse = await response.json()
        result = translatedResponse
      } else {
        result = {
          hostname: `${response.status}`,
          message: 'Error',
          success: false,
        }
      }
  
      results.set(assetName, result)
    }

    dispatch({
      type: ApiActionType.SET_API_RESPONSE,
      payload: { results }
    })
  }

  useEffect(() => {
    let interval: NodeJS.Timer
    if (!state.results) {
      getApiStatus()
    } else {
      interval = setInterval(getApiStatus, REFETCH_INTERVAL * 1000)
    }

    return () => interval && clearInterval(interval)
  }, [state])

  const value = {state, dispatch}

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>
}

const useApiContext = () => {
  const context = useContext(ApiContext);
  if (!context) throw new Error('useApiContext must be used within a ApiContextProvider');

  return context;
};

export {ApiContextProvider, useApiContext}