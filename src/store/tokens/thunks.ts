import { ActionThunk } from "store/types";
import TOKENS_SUCCESS from "constants/tokens_success.json"

import {  postTokensRequest, postTokensRequestRemove, postTokensSuccess } from "./actions";
import { TokensAction } from "./types";

export const postTokens = (payload = {username: "tesonet", password: "partyanimal"}): ActionThunk<
TokensAction
> => dispatch => {
    dispatch({ type: postTokensRequest, payload: null });

    // TODO fix preflight req error
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

      dispatch({
        type: postTokensSuccess,
        payload: TOKENS_SUCCESS
      });
  };

export const deleteTokens = (): ActionThunk<
TokensAction> => dispatch => {
  dispatch({
    type: postTokensRequestRemove,
    payload: false,
  });
};