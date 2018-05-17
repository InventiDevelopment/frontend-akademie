import {api} from '../util/api';

export const INIT_TRANSACTION = 'INIT_TRANSACTION';
export const SET_VISIBILITY = 'SET_TRANSACTION_VISIBILITY';
export const SET_MONTH = 'SET_MONTH';
export const SET_PERIOD = 'SET_PERIOD';



export const setInitialTransactions = (data) => {
  return {
    type: INIT_TRANSACTION,
    data: data
  }
}


export const setTransactionVisibility = (data) => {
  return {
    type: SET_VISIBILITY,
    data
  }
}

export const setSelectedMonth = (data) => {
  return {
    type: SET_MONTH,
    data
  }
}

export const setTransactionTimePeriod = (data) => {
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
    return api.post(`/transactions/`, transaction)
      .then(response => {
        dispatch(getTransactionData())
      })
  }
}

export const editTransactionInBE = (transaction) => {
  return dispatch => {
    return api.put(`/transactions/${transaction.id}`, transaction)
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
