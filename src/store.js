// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';

import reducers from './reducers';
declare var module: {
  hot: {
    accept: (s: string, f: () => void) => void,
  },
};
export default function configureStore(
  initialState: Object = {},
  history: History,
) {
  const composeEnhancers = process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

  const middleware = routerMiddleware(history);
  const enhancers = [applyMiddleware(middleware)];

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(...enhancers),
  );

  store.asyncReducers = {};

  return store;
}
