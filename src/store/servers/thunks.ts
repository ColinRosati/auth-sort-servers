import axios from 'axios';
import { AnyAction } from 'redux';

import { ActionThunk } from 'store/types';
import { getServersRequest, getServersSuccess, getServersFailed } from './actions';
import { apiGetServers } from './api';
import { Servers } from './types';

const getServers = (payload: string): ActionThunk<AnyAction> => (dispatch) => {
  dispatch({ type: getServersRequest, payload: null });

  axios.get(apiGetServers,
    {
      headers: {
        authorization: payload,
      },
    })
    .then(({ data }: { data: Servers }) => data)
    .then((body): void => {
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
