import axios from 'axios';
import { ActionThunk } from 'store/types';

import { getServersRequest, getServersSuccess, getServersFailed } from './actions';
import { apiGetServers } from './api';
import { ServerAction, Servers } from './types';

const getServers = (payload: string): ActionThunk<ServerAction> => (dispatch) => {
  dispatch({ type: getServersRequest, payload });

  axios.get(apiGetServers,
    {
      headers: {
        authorization: payload,
      },
    })
    .then(({ data }): Servers => data)
    .then((body: Servers): void => {
      dispatch({
        type: getServersSuccess,
        payload: body,
      });
    })
    .catch(() => {
      dispatch({
        type: getServersFailed,
        payload: true,
      });
    });
};

export default getServers;
