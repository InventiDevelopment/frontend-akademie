import { api } from "../util/api";

export const INIT_TRANSACTION = 'INIT_TRANSACTION';

export const setInitialTransactions = (data) => {
  return {
    type: INIT_TRANSACTION,
    data: data
  }
}

export const getAllTransactions = () => {
  return (dispatch) => {
    return api.get('/transactions').then(
      response => {
        dispatch(setInitialTransactions(response.data))
      },
      error => {
        dispatch(setInitialTransactions({}))
      }
    )
  }
}

export const deleteTransaction = (transaction) => {
  return (dispatch) => {
    return api.delete(`/transactions/${transaction.created}`).then(
      response => {
        dispatch(getAllTransactions())
      }
    )
  }
}

export const apiAddTransaction = (transaction) => {
  return (dispatch) => {
    return api.post(`/transactions`, transaction).then(
      response => {
        dispatch(getAllTransactions())
      }
    )
  }
}
