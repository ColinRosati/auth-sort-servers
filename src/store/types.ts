import { ThunkAction } from "@reduxjs/toolkit";
import { ServerAction, ServerState } from "./servers/types";
import { store } from "./store";
import { TokensState, TokensAction } from "./tokens/types";

export type AppDispatch = typeof store.dispatch;

export interface RootState {
  servers: ServerState;
  tokens: TokensState;
}

export type RootAction = ServerAction | TokensAction;

export type ActionThunk<A> = ThunkAction<
void,
RootState,
unknown,
A
> 