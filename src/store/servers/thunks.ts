import { ActionThunk } from "store/types";

import { getServersRequest, getServersSuccess, getServersFailed } from "./actions";
import { apiGetServers } from "./api";
import { ServerAction } from "./types";

export const getServers = (): ActionThunk<
ServerAction> => dispatch => {
  dispatch({ type: getServersRequest, payload: null });
  fetch(apiGetServers)
    .then(response => response.json())
    .then((body) => {
      dispatch({
        type: getServersSuccess,
        payload: body
      });
    })
    .catch(e => {
      dispatch({
        type: getServersFailed,
        payload: e
      });
    });
};