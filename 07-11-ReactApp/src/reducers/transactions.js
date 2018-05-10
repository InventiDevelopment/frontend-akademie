import { ADD_TRANSACTION, INIT_TRANSACTION } from '../actions/';

export default (state = [], action) => {
  switch (action.type){
    case ADD_TRANSACTION:
      return[
        ...state,
        action.data
      ]

    case INIT_TRANSACTION:
      return action.data

    default:
      return state;
  }
}