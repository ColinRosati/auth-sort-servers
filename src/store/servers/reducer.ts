import { Action, handleActions } from 'redux-actions';
import { getServersSuccess, getServersFailed } from './actions';
import {
  ServerState,
  InitialState,
  GetServersSuccessPayload,
} from './types';

const initialState: InitialState = {
  data: [],
  hasError: false,
};

const serversReducer = handleActions<ServerState, GetServersSuccessPayload>({
  [getServersSuccess]: (state, { payload }: Action<GetServersSuccessPayload>): ServerState => ({
    ...state,
    data: payload,
  }),
  [getServersFailed]: (state): ServerState => ({
    ...state,
    hasError: true,
  }),
}, initialState);

export default serversReducer;
