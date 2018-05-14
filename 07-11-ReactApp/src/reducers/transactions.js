import {ADD_TRANSACTION, INIT_TRANSACTION, DELETE_TRANSACTION} from '../actions';

export default ({state = [], action}) => {
    switch(action.type) {
        case ADD_TRANSACTION:
            return [
                ...state,
                action.data
            ]

        case INIT_TRANSACTION:
            return action.data

        case DELETE_TRANSACTION:
            return state.filter(
                object => JSON.stringify(action.data) !== JSON.stringify(object)    
            )
        
        default:
            return state;
    }
}