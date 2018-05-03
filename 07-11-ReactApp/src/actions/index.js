export const ADD_TRANSACTION = 'ADD_TRANSACTION';

export const addTransacxtion = (transaction) => {
    return {
        type: ADD_TRANSACTION,
        data: transaction
    }
}