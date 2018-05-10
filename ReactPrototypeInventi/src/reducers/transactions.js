import { INIT_TRANSACTION } from "../actions";

export default (state = [], action) => {
  switch (action.type) {
    case INIT_TRANSACTION:
      return action.data

    default:
      return state;
  }
}
