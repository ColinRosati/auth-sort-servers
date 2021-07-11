import { Action } from '@reduxjs/toolkit';

import {
  postTokensFailed,
  postTokensRequest,
  postTokensSuccess,
} from './actions';

export type InitialState =
  | {
    token: null | string;
    errors: null | {
      errorMessage: null | string;
      hasErrors: boolean;
    };
    hasToken: boolean;
  }
  | undefined;

interface PostTokensRequestAction extends Action<typeof postTokensRequest> {
  payload: null | string;
}
interface PostTokensSuccessAction extends Action<typeof postTokensSuccess> {
  payload: string;
}
interface PostTokensFailedAction extends Action<typeof postTokensFailed> {
  payload: null | boolean;
}

export type TokensAction =
  | PostTokensRequestAction
  | PostTokensSuccessAction
  | PostTokensFailedAction;

export type TokensState = InitialState;
