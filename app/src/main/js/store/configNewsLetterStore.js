import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from '../reducer/newsletterIndex';
import  {epic}  from '../epic';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware(epic);
const appliedMiddlewareCreateStore = applyMiddleware(logger, epicMiddleware)(createStore);

export default (initialState = {}) => (
    (appliedMiddlewareCreateStore)(reducer, initialState)
);
