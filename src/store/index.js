import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import rootSaga from './sagas';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const initStore = () => {
  const store = createStore(reducer, composeEnhancer(applyMiddleware(sagaMiddleware, logger)));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default initStore;
