import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/reducers.js';

import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

const loggerMiddleware = createLogger();
const history = createHistory();
const router = routerMiddleware(history);

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware, router)
  );

  // if(module.hot) {
  //   module.hot.accept('./reducers/reducers.js', () => {
  //     const nextReducer = require('./reducers/reducers.js').default;
  //     store.replaceReducer(nextReducer);
  //   });
  // }

  return store;
}
export { history, configureStore }
