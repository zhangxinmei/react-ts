import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
export const history = createHashHistory();

const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window &&
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) ||
  compose;

export const configureStore = () => {
  const middlewares = [routerMiddleware(history), thunkMiddleware];
  if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');
    middlewares.push(logger);
  }
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  return createStore(rootReducer, {}, enhancer);
};
