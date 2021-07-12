import { Action, handleActions } from 'redux-actions';
import {
  postTokensSuccess,
  postTokensFailed,
  postTokensRequestRemove,
} from './actions';
import { InitialState, TokensState, PostTokensSuccessPayload } from './types';

const initialState: InitialState = {
  token: null,
  hasError: false,
  hasToken: false,
};

const tokensReducer = handleActions<TokensState, PostTokensSuccessPayload>({
  [postTokensSuccess]: (state, { payload }: Action<PostTokensSuccessPayload>): TokensState => ({
    ...state,
    token: payload,
    hasError: false,
    hasToken: true,
  }),
  [postTokensRequestRemove]: (state)
  : TokensState => ({
    ...state,
    token: null,
    hasError: false,
    hasToken: false,
  }),
  [postTokensFailed]: (state)
  : TokensState => ({
    ...state,
    token: null,
    hasError: true,
    hasToken: false,
  }),
}, initialState);

export default tokensReducer;
