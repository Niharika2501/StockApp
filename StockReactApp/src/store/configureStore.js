import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../saga';
import { isServer, isDevelop } from '../utils/helpers';

import storageSession from 'redux-persist/lib/storage/session';
import { persistStore, persistReducer } from 'redux-persist';

// Blacklist user here because it will be persisted individually as a reducer
const persistConfig = {
  key: 'root',
  storage: storageSession,
  blacklist: ['user']
};

// Persist reducers only during runtime
export const getReducer = () =>
  isServer() ? rootReducer : persistReducer(persistConfig, rootReducer);

let reducers = getReducer();

//initiate saga middleware
let sagaMiddleware = createSagaMiddleware();

//enable redux-devtool under develop env
export const getComposeEnhancers = () =>
  isDevelop() ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

let composeEnhancers = getComposeEnhancers();

//apply middleware
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

export function configureStore() {
  let store = createStore(reducers, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
}

const store = configureStore();

const persistor = !isServer() && persistStore(store);

export default {
  store,
  persistor
};
