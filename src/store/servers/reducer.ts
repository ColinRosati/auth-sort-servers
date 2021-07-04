import { Reducer } from "react";
import { getServersSuccess, getServersFailed } from "./actions";
import { ServerState, ServerAction, InitialState } from "./types";

const initialState: InitialState = {
  data: [],
  hasErrors: false,
}

export const serversReducer: Reducer<ServerState, ServerAction> = (
  state = initialState,
  {type, payload}
) => {
  switch (type) {
    case getServersSuccess:
      return {
        ...state,
        data: payload
      };
    case getServersFailed:
      return {
        ...state,
        hasErrors: payload
      };
    default:
      return {
        ...state
      }
  }
};