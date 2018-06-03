import { combineReducers } from 'redux';
import transactions from './transaction';
import filter from './filter';
import balance from '../pages/OverviewBalance/reducers';

export default combineReducers({
  transactions,
  filter,
  balance
})