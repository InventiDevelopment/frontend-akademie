import { combineReducers } from 'redux';
import transactions from './transactions';
import filter from './filter';
import balance from './../pages/Balance/reducers';

export default combineReducers({
  transactions,
  filter,
  balance
})
