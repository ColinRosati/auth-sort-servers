import { Reducer } from 'react';
import {
  postTokensSuccess,
  postTokensFailed,
  postTokensRequestRemove,
} from './actions';
import { InitialState, TokensState, TokensAction } from './types';

const initialState: InitialState = {
  token: null,
  errors: null,
  hasToken: false,
};

export const tokensReducer: Reducer<TokensState, TokensAction> = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case postTokensSuccess:
      return {
        ...state,
        token: payload,
        errors: null,
        hasToken: true,
      };
    case postTokensRequestRemove:
      return {
        ...state,
        token: false,
        errors: null,
        hasToken: false,
      };
    case postTokensFailed:
      return {
        ...state,
        token: false,
        errors: {
          hasErrors: true,
          errorMessage: payload,
        },
        hasToken: false,
      };
    default:
      return {
        ...state,
      };
  }
};
