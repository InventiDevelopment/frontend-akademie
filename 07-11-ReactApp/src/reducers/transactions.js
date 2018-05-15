import { ADD_TRANSACTION, INIT_TRANSACTION, DElETE_TRANSACTION } from "../actions";

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

export const getTransactions = state => state.transaction;
export const getOverview = state => {
  return {
    "income": getTransactions(state).filter(),
    "expenses": 1000,
    "total": 500
  }
};