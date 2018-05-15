import { SET_TRANSACTION_VISIBILITY } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_TRANSACTION_VISIBILITY:
      console.log(action);
      return {
        ...state,
        transactionVisibility: action.data
      }

    default:
      return state;
  }
}
