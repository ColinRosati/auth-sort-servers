import { ActionThunk } from "store/types";
import TOKENS_SUCCESS from "constants/tokens_success.json"

import {  postTokensFailed, postTokensRequest, postTokensRequestRemove, postTokensSuccess } from "./actions";
import { TokensAction } from "./types";
import { FeildsState } from "components/Authorization/types";

export const postTokens = (payload: FeildsState): ActionThunk<
TokensAction
> => dispatch => {
    dispatch({ type: postTokensRequest, payload: null });

    // TODO fix preflight CORS redirect error
    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(payload)
    // };
    
    // fetch(apiPostTokens, requestOptions)
    //   .then(response => response.json())
    //   .then((body) => {
    //     dispatch({
    //       type: postTokensSuccess,
    //       payload: body
    //     });
    //   })
    //   .catch(e => {
    //     dispatch({
    //       type: postTokensFailed,
    //       payload: e
    //     });
    //   });

    if(payload.email === 'tesonet' && payload.password === 'partyanimal'){
      dispatch({
        type: postTokensSuccess,
        payload: TOKENS_SUCCESS
      });
    } else {
      dispatch({
        type: postTokensFailed,
        payload: null
      });
    }
  };

export const deleteTokens = (): ActionThunk<
TokensAction> => dispatch => {
  dispatch({
    type: postTokensRequestRemove,
    payload: false,
  });
};