import { api } from '../util/api';

export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const INIT_TRANSACTION = 'INIT_TRANSACTION';
export const EDIT_TRANSACTION = 'EDIT_TRANSACTION';
export const DElETE_TRANSACTION = 'DElETE_TRANSACTION';
export const SET_TRANSACTION_VISIBILITY = 'SET_TRANSACTION_VISIBILITY';
export const SET_SELECTED_BUTTON = 'SET_SELECTED_BUTTON';
export const SET_MONTH = 'SET_MONTH';
export const SET_PERIOD = 'SET_PERIOD';

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

export const editTransactionInStore = (transaction) => {
  return {
    type: EDIT_TRANSACTION,
    data: transaction
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

export const setSelectedButton = (data) => {
  return {
    type: SET_SELECTED_BUTTON,
    data
  }
}

export const setMonthVisibility = (data) => {
  return {
    type: SET_MONTH,
    data
  }
}

export const setPeriodVisibility = (data) => {
  return {
    type: SET_PERIOD,
    data
  }
}

export const getTransactionData = () => {
  return dispatch => {
    return api.get(`/transactions`)
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
    return api.post(`/transactions`, transaction)
      .then(response => {
        dispatch(getTransactionData())
      })
  }
}

export const editTransactionInBE = (transactionId) => {
  return dispatch => {
    return api.put(`/transactions/${transactionId}`)
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
