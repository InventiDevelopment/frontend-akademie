import { INCREMENT } from "../actions";

export default (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;

    default:
      return state;
  }
}

export const getBalance = (state) => state.balance;
