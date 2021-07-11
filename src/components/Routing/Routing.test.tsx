import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';

import { store } from 'store/store';
import { postTokensSuccess } from 'store/tokens/actions';
import TOKENS_SUCCESS from 'constants/tokens_success.json';

import Routing from './Routing';

describe('Routing', () => {
  it('will redirect a non-logged user to '/login'', () => {
    const history = createMemoryHistory();
    history.push('/some/bad/route');
    render(
      <Provider store={store}>
        <Router history={history}>
          <Routing />
        </Router>
      </Provider>
    );

    expect(window.location.pathname).toBe('/login');
  });

  it('will redirect a logged user away from '/login' to '/'', () => {
    const history = createMemoryHistory();
    store.dispatch({
      type: postTokensSuccess,
      payload: TOKENS_SUCCESS,
    });
    history.push('/login');

    render(
      <Provider store={store}>
        <Router history={history}>
          <Routing />
        </Router>
      </Provider>
    );

    expect(window.location.pathname).toBe('/');
  });
});
