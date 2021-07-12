import axios from 'axios';
import { AnyAction } from 'redux';

import { ActionThunk } from 'store/types';
import { FeildsState } from 'components/Authorization/types';

import {
  postTokensFailed,
  postTokensRequest,
  postTokensRequestRemove,
  postTokensSuccess,
} from './actions';
import { apiPostTokens } from './api';

export const postTokens = (payload: FeildsState): ActionThunk<AnyAction> => (dispatch) => {
  dispatch({ type: postTokensRequest, payload: null });

  axios.post(apiPostTokens(payload))
    .then(({ data: { token } }: { data: { token : string } }) => token)
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

export const deleteTokens = (): ActionThunk<AnyAction> => (dispatch) => {
  dispatch({
    type: postTokensRequestRemove,
    payload: false,
  });
};
