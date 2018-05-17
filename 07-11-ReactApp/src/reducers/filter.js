import { SET_TRANSACTION_VISIBILITY, SET_MONTH } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_TRANSACTION_VISIBILITY:
      return {
        ...state,
        transactionVisibility: action.data
      }

		case SET_MONTH:
			return{
				...state,
				monthVisibility: action.data
			}

    default:
      return state;
  }
}

export const getTransactionVisibilityFilter = state => state.filter.transactionVisibility;
export const getMonthVisibilityFilter = state => !state.filter.monthVisibility ? 0 : state.filter.monthVisibility;

