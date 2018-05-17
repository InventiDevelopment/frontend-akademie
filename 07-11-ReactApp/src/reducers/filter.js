import {SET_VISIBILITY, SET_MONTH, SET_PERIOD} from '../actions'

export default (state = {}, action) => {
  switch (action.type){
    case SET_VISIBILITY:
      return{
        ...state,
        transactionVisibility: action.data
      }

    case SET_MONTH:
    return{
      ...state,
      monthVisibility: action.data
    }

    case SET_PERIOD:
      return{
        ...state,
        periodVisibility: action.data
      }

    default:
      return state
  }
}

export const transactionVisibilityFilter = state => state.filter.transactionVisibility;
export const monthVisibilityFilter = state => (state.filter.monthVisibility === undefined) ? 0 : state.filter.monthVisibility;
export const periodVisibilityFilter = state => state.filter.periodVisibility;



