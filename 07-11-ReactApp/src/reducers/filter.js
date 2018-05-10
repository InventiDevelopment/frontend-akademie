import { ADD_TRANSACTION, INIT_TRANSACTION } from '../actions/';

export default (state = [], action) => {
  switch (action.type){
    case SET_FILTER:
      return[
        ...state,
        ...action.data
      ]

    default:
      return state;
  }
}