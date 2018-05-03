import { ADD_TRANSACTION } from '../actions'

export default (state=[], action) => {
  switch (action.type){
    case ADD_TRANSACTION:
      return[
        ...state,
        action.data
      ]
    default:
      return state;
  }
}