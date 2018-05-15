import {api} from "../util/api";

export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const INIT_TRANSACTION = 'INIT_TRANSACTION';
export const DElETE_TRANSACTION = 'DElETE_TRANSACTION';
export const SET_TRANSACTION_VISIBILITY = 'SET_TRANSACTION_VISIBILITY';

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

export const deleteTransactionFromStore = (transaction) => {
  return {
    type: DElETE_TRANSACTION,
    data: transaction
  }
}

export const setTransactionVisibility = (data) => {
  return {
    type: SET_TRANSACTION_VISIBILITY,
    data
  }
}


export const getTransactionData = () => {
  return dispatch => {
    return api.get('/transactions')
      .then(response => {
        dispatch(setInitialTransactions(response.data))
      })
      .catch(error => {
        dispatch(setInitialTransactions([]))
      })
  }
}

export const addTransactionToBE = (transaction) => {
  return dispatch => {
    return api.post('/transactions',transaction)
      .then(response => {
        dispatch(getTransactionData())
      })
  }
}

export const deleteTransactionFromBE = (transactionId) => {
  return dispatch => {
    return api.delete(`/transactions/${transactionId}`)
      .then(response => {
        dispatch(getTransactionData())
      })
  }
}