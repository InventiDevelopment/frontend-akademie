import { ADD_TRANSACTION, INIT_TRANSACTION, DElETE_TRANSACTION } from "../actions";
import { getTransactionVisibilityFilter } from "./filter";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return [
        ...state,
        action.data
      ]

    case INIT_TRANSACTION:
      return action.data

    case DElETE_TRANSACTION:
      return state.filter(
        object => JSON.stringify(action.data) !== JSON.stringify(object)
      )

    default:
      return state;
  }
}

export const getTransactions = state => state.transactions;
const getTypedTransactions = (state, transactionType) => getTransactions(state).filter((transaction) => transaction.type === transactionType)
export const getFilteredTransactions = state => {
  switch (getTransactionVisibilityFilter(state)) {
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
    "total": getTransactions(state).reduce((prev, curr) => curr.type === 'income' ? prev + curr.value : prev - curr.value, 0)
  }
};
