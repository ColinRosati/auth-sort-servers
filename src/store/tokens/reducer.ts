import { Reducer } from "react";
import { InitialState } from "./types";
import { postTokensSuccess, postTokensFailed, postTokensRequestRemove } from "./actions";
import { TokensState, TokensAction } from "./types";

const initialState: InitialState = {
  token: null,
  errors: null,
  hasToken: false,
}

export const tokensReducer: Reducer<TokensState, TokensAction> = (
  state = initialState,
  {type, payload}
) => {
  switch (type) {
    case postTokensSuccess:
      return {
        ...state,
        token: payload.tokens,
        errors: null,
        hasToken: true
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
          errorMessage: payload
        },
        hasToken: false,
      };
    default:
      return {
        ...state
      }
  }
};