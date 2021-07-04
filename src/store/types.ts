import { Action, ThunkAction } from "@reduxjs/toolkit";

import { ServerAction, ServerState } from "./servers/types";
import { TokensState, TokensAction } from "./tokens/types";
import { store } from "./store";

export type AppDispatch = typeof store.dispatch;

export interface RootState {
  servers: ServerState;
  tokens: TokensState;
}

export type RootAction = ServerAction | TokensAction;

export type ActionThunk<A extends Action> = ThunkAction<
void,
RootState,
unknown,
A> 