import { Action, ThunkAction } from '@reduxjs/toolkit';

import { ServerState } from './servers/types';
import { TokensState } from './tokens/types';
import { store } from './store';

export type AppDispatch = typeof store.dispatch;
export interface RootState {
  servers: ServerState;
  tokens: TokensState;
}

export type ActionThunk<A extends Action> = ThunkAction<
void,
RootState,
unknown,
A
>;
