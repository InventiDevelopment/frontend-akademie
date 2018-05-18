import { INIT_TRANSACTION} from "../actions";
import { transactionVisibilityFilter, monthVisibilityFilter, periodVisibilityFilter} from "./filter";
import { getDate, getMonth } from 'date-fns'

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
const getTypedTransactions = (state, transactionType) => getTransactions(state).filter((transaction) => transaction.type === transactionType)
const getTypedMonthTransactions = (state, transactionType) => getMonthTransaction(state).filter((transaction) => transaction.type === transactionType)
const getTodayTransactions =
  (state) => state.transactions.filter((transaction) => getDate(transaction.created) === getDate(new Date())
  && getMonth(transaction.created) === getMonth(new Date()));
const getTodayTypedTransactions = (state, transactionType) => getTodayTransactions(state).filter((transaction) => transaction.type === transactionType)






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
  switch (periodVisibilityFilter(state)){
    case 0:
    default:
      return {
        "income": getTypedMonthTransactions(state, 'income').reduce((prev, curr) => (prev + curr.value), 0),
        "expenses": getTypedMonthTransactions(state, 'expense').reduce((prev, curr) => prev + curr.value, 0),
        "total": getMonthTransaction(state).reduce((prev, curr) => curr.type === 'income' ? prev + curr.value : prev - curr.value, 0)
      }
    case 1:
      return {
        "income": getTodayTypedTransactions(state, 'income').reduce((prev, curr) => (prev + curr.value), 0),
        "expenses": getTodayTypedTransactions(state, 'expense').reduce((prev, curr) => prev + curr.value, 0),
        "total": getTodayTransactions(state).reduce((prev, curr) => curr.type === 'income' ? prev + curr.value : prev - curr.value, 0)
      }
    case 2:
      return {
        "income": getTypedTransactions(state, 'income').reduce((prev, curr) => (prev + curr.value), 0),
        "expenses": getTypedTransactions(state, 'expense').reduce((prev, curr) => prev + curr.value, 0),
        "total": getTransactions(state).reduce((prev, curr) => curr.type === 'income' ? prev + curr.value : prev - curr.value, 0)
      }

  }

};

export const getTotal = state => {
  return {
    "total": getTransactions(state).reduce((prev, curr) => curr.type === 'income' ? prev + curr.value : prev - curr.value, 0)
  }
}