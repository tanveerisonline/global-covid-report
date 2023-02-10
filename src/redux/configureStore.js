import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countriesReducer from './reducers/countries';
import regionsReducer from './reducers/regions';

const reducer = combineReducers({
  countries: countriesReducer,
  regions: regionsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
