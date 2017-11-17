import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import {default as thunkMiddleware} from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import currentUser from './currentUser'

const reducer = combineReducers({currentUser})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true }),
));
const store = createStore(reducer, middleware);

export default store;
export * from './currentUser';
export * from './pets';
