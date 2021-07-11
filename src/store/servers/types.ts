import { Action } from '@reduxjs/toolkit';

import {
  getServersFailed,
  getServersRequest,
  getServersSuccess,
} from './actions';

export type Server = {
  name: string;
  distance: number;
};

export type Servers = Server[];

export type InitialState = {
  data: Servers | null;
  hasError: boolean;
};
interface GetServersRequestAction extends Action<typeof getServersRequest> {
  payload: Servers | string | null;
}
interface GetServersSuccessAction extends Action<typeof getServersSuccess> {
  payload: Servers;
}
interface GetServersFailedAction extends Action<typeof getServersFailed> {
  payload: boolean;
}

export type ServerAction =
  | GetServersRequestAction
  | GetServersSuccessAction
  | GetServersFailedAction;

export type ServerState = InitialState;
