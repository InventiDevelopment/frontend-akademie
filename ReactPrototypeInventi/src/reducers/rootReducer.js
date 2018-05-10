import { combineReducers } from 'redux';
import transactions from './transactions';
import filter from './filter';

export default combineReducers({
  transactions,
  filter
})
