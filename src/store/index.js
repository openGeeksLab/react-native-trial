import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import sagas from '../sagas';
import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const middlewares = composeWithDevTools(
  applyMiddleware(
    sagaMiddleware,
  ),
);

const store = createStore(
  reducers,
  middlewares,
);

sagaMiddleware.run(sagas);

export default store;
