import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
import * as sagas from './sagas';
import { reducer } from './reducer';

export const store = createStore(
    reducer,
    applyMiddleware(createLogger(), sagaMiddleware)
);

//sagaMiddleware.run(taskCreationSaga, taskModicationSaga)

for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}