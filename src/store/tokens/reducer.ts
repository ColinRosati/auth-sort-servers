import { Reducer } from "react";
import { InitialState } from "./types";
import { postTokensSuccess, postTokensFailed } from "./actions";
import { TokensState, TokensAction } from "./types";

const initialState: InitialState = {
  tokens: null,
}

export const tokensReducer: Reducer<TokensState, TokensAction> = (
  state = initialState,
  {type, payload}
) => {
  switch (type) {
    case postTokensSuccess:
      return {
        ...state,
        tokens: payload
      };
    case postTokensFailed:
      return {
        ...state,
        tokens: false
      };
    default:
      return {
        ...state
      }
  }
};