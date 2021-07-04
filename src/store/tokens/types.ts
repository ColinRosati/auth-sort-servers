import { Action } from "@reduxjs/toolkit";

import { postTokensFailed, postTokensRequest, postTokensSuccess } from "./actions";

export type InitialState = {
  tokens: any;
};

interface PostTokensRequestAction
  extends Action<typeof postTokensRequest> {
    payload: any;
}
interface PostTokensSuccessAction
  extends Action<typeof postTokensSuccess> {
  payload: any;
}
interface PostTokensFailedAction
  extends Action<typeof postTokensFailed> {
  payload: any;
}

export type TokensAction =
  | PostTokensRequestAction
  | PostTokensSuccessAction
  | PostTokensFailedAction;

export type TokensState = InitialState;