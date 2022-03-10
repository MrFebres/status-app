import { Reducer } from 'react';

export enum ApiActionType {
  GET_USER_KEY,
  REMOVE_USER_INFO,
  SET_USER_ADDRESS,
  SET_USER_INFO,
  SET_USER_KEY
}

export type ApiClient = {
  results: any
};

export type ApiClientAction = {
  payload?: Partial<ApiClient>;
  type: ApiActionType;
};

export type ApiClientReducer = Reducer<ApiClient, ApiClientAction>;
