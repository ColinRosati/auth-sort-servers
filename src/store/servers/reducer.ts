import { Reducer } from 'react';
import { getServersSuccess, getServersFailed } from './actions';
import { ServerState, ServerAction, InitialState } from './types';

const initialState: InitialState = {
  data: [],
  hasError: false,
};

const serversReducer: Reducer<ServerState, ServerAction> = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case getServersSuccess:
      return {
        ...state,
        data: payload,
      };
    case getServersFailed:
      return {
        ...state,
        hasError: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default serversReducer;
