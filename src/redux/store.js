import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import initialState from "./initialState";
import thunk from "redux-thunk";
import statusReducers from './statusRedux'
import matchesReducers from './matchesRedux'
import usersReducers from './usersRedux'

const reducer = combineReducers({
    status: statusReducers,
    matches: matchesReducers,
    users: usersReducers
})

const store = createStore(
    reducer,
    initialState,
  
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );

export default store;