import { SET_FILTER, SET_MONTH } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        transactionVisibleCategory: action.data
      }

    case SET_MONTH:
      return {
        ...state,
        overviewMonth: parseInt(action.data)
      }

    default:
      return state;
  }
}

export const getFilter =  state => state.filter;
export const getTransactionVisibleFilter =  state => state.filter.transactionVisibleCategory;
export const getOverviewMonth =  state => state.filter.overviewMonth;
