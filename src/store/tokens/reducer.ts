import { Reducer } from "react";
import { InitialState } from "./types";
import { postTokensSuccess, postTokensFailed, postTokensRequestRemove } from "./actions";
import { TokensState, TokensAction } from "./types";

const initialState: InitialState = {
  token: null,
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
        hasToken: true
      };
    case postTokensRequestRemove:
    case postTokensFailed:
      return {
        ...state,
        token: false,
        hasToken: false,
      };
    default:
      return {
        ...state
      }
  }
};