import { INIT_TRANSACTION} from "../actions";
import { transactionVisibilityFilter, monthVisibilityFilter} from "./filter";
import { getMonth } from 'date-fns'

export default (state = [], action) => {
  switch (action.type) {

    case INIT_TRANSACTION:
      return action.data

    default:
      return state;

  }
}

export const getTransactions = state => state.transactions;
const getMonthTransaction = (state) => state.transactions.filter((transaction) => getMonth(transaction.created) === (monthVisibilityFilter(state)))
const getTypedTransactions = (state, transactionType) => getMonthTransaction(state).filter((transaction) => transaction.type === transactionType)




export const getFilteredTransactions = state => {
  switch (transactionVisibilityFilter(state)) {
    case 0:
    default:
      return getTransactions(state);

    case 1:
      return getTransactions(state).filter((transaction) => transaction.type === 'income');

    case 2:
      return getTransactions(state).filter((transaction) => transaction.type === 'expense');
  }
}


export const getOverview = state => {
  return {
    "income": getTypedTransactions(state, 'income').reduce((prev, curr) => (prev + curr.value), 0),
    "expenses": getTypedTransactions(state, 'expense').reduce((prev, curr) => prev + curr.value, 0),
    "total": getMonthTransaction(state).reduce((prev, curr) => curr.type === 'income' ? prev + curr.value : prev - curr.value, 0)
  }
};

export const getTotal = state => {
  return {
    "total": getTransactions(state).reduce((prev, curr) => curr.type === 'income' ? prev + curr.value : prev - curr.value, 0)
  }
}