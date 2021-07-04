import { ActionThunk } from "store/types";
import SERVERS_SUCCESS from "constants/servers_success.json"

import { getServersRequest, getServersSuccess } from "./actions";
import { ServerAction } from "./types";

export const getServers = (payload: string): ActionThunk<
ServerAction> => dispatch => {
  dispatch({ type: getServersRequest, payload: null });

   // TODO preflight error
    // axios.get(apiGetServers, {
    //   headers: {
    //     authorization: payload 
    //   }
    // })
    //   .then(response => response)
    //   .then((body) => {
    //     dispatch({
    //       type: getServersSuccess,
    //       payload: body
    //     });
    //   })
    //   .catch(e => {
    //     // dispatch({
    //     //   type: getServersFailed,
    //     //   payload: e
    //     // });
    //   });

    dispatch({
      type: getServersSuccess,
      payload: SERVERS_SUCCESS
    });
};