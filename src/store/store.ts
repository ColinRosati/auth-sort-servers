import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { serversReducer } from 'store/servers/reducer';
import { tokensReducer } from 'store/tokens/reducer';

import { RootState, RootAction } from './types';

const configureStore = () => {
  const rootReducer = combineReducers<RootState, RootAction>({
    servers: serversReducer,
    tokens: tokensReducer
  });
  const store = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
};

export const store = configureStore();