import { SET_TRANSACTION_VISIBILITY } from "../actions";
import { SET_MONTH } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_TRANSACTION_VISIBILITY:
      return {
        ...state,
        transactionVisibility: action.data
      }

    case SET_MONTH:
      return {
        ...state,
        setMonthVisibility: action.data
      }

    default:
      return state;
  }
}

export const getTransactionVisibilityFilter = state => state.filter.transactionVisibility;
export const getSelectedMonth = state => state.filter.setMonthVisibility;