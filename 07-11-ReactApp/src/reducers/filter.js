import { SET_TRANSACTION_VISIBILITY, CHANGED_MONTH } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_TRANSACTION_VISIBILITY:
      return {
        ...state,
        transactionVisibility: action.data
      }

    case CHANGED_MONTH:
    return {
      ...state,
      changeMonth: action.data
    }

    default:
      return state;
  }
}

export const getTransactionVisibilityFilter = state => state.filter.transactionVisibility;
export const getMonthFilter = state => state.filter.changeMonth;
