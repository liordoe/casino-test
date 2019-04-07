import MainReducer from 'client/reducers/CombineReducer';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';

const logger = createLogger({
    collapsed: true,
    diff: true,
});

const Store = createStore(
    MainReducer,
    applyMiddleware(logger),
);

export default Store;
