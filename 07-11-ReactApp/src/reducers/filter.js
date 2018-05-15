import { SET_TRANSACTION_VISIBILITY } from "../actions";
import { SELECT_MONTH } from "../pages/Balance/actions";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_TRANSACTION_VISIBILITY:
      return {
        ...state,
        transactionVisibility: action.data
      }
    case SELECT_MONTH:
      return {
        ...state,
        selectMonth: action.data
      }

    default:
      return state;
  }
}

export const getTransactionVisibilityFilter = state => state.filter.transactionVisibility;
