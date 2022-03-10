import { Reducer } from 'react';

export enum ApiActionType {
  SET_API_RESPONSE
}

export type ApiClient = {
  results?: Map<string, ApiResponse>
};

export type ApiClientAction = {
  payload?: ApiClient;
  type: ApiActionType;
};

export type ApiResponse = {
  hostname: string,
  message: string,
  success: boolean,
  time?: number
}

export type ApiClientReducer = Reducer<ApiClient, ApiClientAction>;
