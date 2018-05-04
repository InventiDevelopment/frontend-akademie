export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const INIT_TRANSACTION = 'INIT_TRANSACTION';

export const addTransaction = (transaction) => {
  return {
    type: ADD_TRANSACTION,
    data: transaction
  }
}

export const setInitialTransactions = (data) => {
  return {
    type: INIT_TRANSACTION,
    data: data
  }
}
