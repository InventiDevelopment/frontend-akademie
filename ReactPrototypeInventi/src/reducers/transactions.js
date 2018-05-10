import getMonth from 'date-fns/get_month';
import { ADD_TRANSACTION, INIT_TRANSACTION, DELETE_TRANSACTION } from "../actions";
import { getTransactionVisibleFilter, getOverviewMonth } from "./filter";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return [
        ...state,
        action.data
      ]

    case INIT_TRANSACTION:
      return action.data

    case DELETE_TRANSACTION:
      return state.filter(
        object => JSON.stringify(action.data) !== JSON.stringify(object)
      )

    default:
      return state;
  }
}

export const getTransactions = store => store.transactions
export const getfilteredTransactions = store => {
  const transactions = getTransactions(store);
  switch (getTransactionVisibleFilter(store)) {
    case 0:
    default:
      return transactions;

    case 1:
      return transactions.filter((transaction) => transaction.type === 'income');

    case 2:
      return transactions.filter((transaction) => transaction.type === 'expense');
  }
}
export const getTransactionOverviewInMonth = store => {
  const filteredTransactions = getTransactions(store).filter(
    transaction => getMonth(transaction.created) === getOverviewMonth(store)
  )
  return {
    income: filteredTransactions.reduce((previous, current) => current.type === 'income' ? previous + current.value : previous, 0),
    expenses: filteredTransactions.reduce((previous, current) => current.type === 'expense' ? previous + current.value : previous, 0),
    total: filteredTransactions.reduce((previous, current) => current.type === 'income' ? previous + current.value : previous - current.value, 0)
  }
}
