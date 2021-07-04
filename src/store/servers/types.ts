import { Action } from "@reduxjs/toolkit";

import { getServersFailed, getServersRequest, getServersSuccess } from "./actions";

export type Servers = any[]

export type InitialState = {
  data: Servers;
  hasErrors: false | string;
}| undefined;;

interface GetServersRequestAction
  extends Action<typeof getServersRequest> {
    payload: any;
}
interface GetServersSuccessAction
  extends Action<typeof getServersSuccess> {
  payload: Servers;
}
interface GetServersFailedAction
  extends Action<typeof getServersFailed> {
  payload: any;
}

export type ServerAction =
  | GetServersRequestAction
  | GetServersSuccessAction
  | GetServersFailedAction;

export type ServerState = InitialState;