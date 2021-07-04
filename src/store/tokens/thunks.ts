import { ActionThunk } from "store/types";
import { postTokensFailed, postTokensRequest, postTokensSuccess } from "./actions";

import { apiPostTokens } from "./api";
import { TokensAction } from "./types";

export const postTokens = (payload = {username: "tesonet", password: "partyanimal"}): ActionThunk<
TokensAction
> => dispatch => {
    dispatch({ type: postTokensRequest, payload: null });

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    };
    
    fetch(apiPostTokens, requestOptions)
      .then(response => response.json())
      .then((body) => {
        dispatch({
          type: postTokensSuccess,
          payload: body
        });
      })
      .catch(e => {
        dispatch({
          type: postTokensFailed,
          payload: e
        });
      });
  };