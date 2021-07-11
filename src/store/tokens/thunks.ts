import axios from 'axios';
import { ActionThunk } from 'store/types';
import { FeildsState } from 'components/Authorization/types';

import {
  postTokensFailed,
  postTokensRequest,
  postTokensRequestRemove,
  postTokensSuccess,
} from './actions';
import { TokensAction } from './types';
import { apiPostTokens } from './api';

export const postTokens = (payload: FeildsState): ActionThunk<TokensAction> => (dispatch) => {
  dispatch({ type: postTokensRequest, payload: null });

  axios.post(apiPostTokens(payload))
    .then(({ data: { token } }): string => token)
    .then((body: string): void => {
      dispatch({
        type: postTokensSuccess,
        payload: body,
      });
    })
    .catch(() => {
      dispatch({
        type: postTokensFailed,
        payload: true,
      });
    });
};

export const deleteTokens = (): ActionThunk<TokensAction> => (dispatch) => {
  dispatch({
    type: postTokensRequestRemove,
    payload: false,
  });
};
