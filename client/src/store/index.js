import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { default as thunkMiddleware } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import currentUser from './currentUser'
import pets from './pets'
import matches from './matches'


const reducer = combineReducers({ currentUser, pets, matches })
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true }),
));
const store = createStore(reducer, middleware);

export default store;
export * from './currentUser';
export * from './pets';
export * from './matches';
