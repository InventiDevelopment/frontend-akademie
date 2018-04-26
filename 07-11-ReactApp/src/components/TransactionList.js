import React from 'react';
import transactions from '../data/transactions';
import TransactionContainer from './TransactionContainer';

export default class TransactionList extends React.Component {
    state = { transactions: [] }

    componentDidMount() {
        this.setState({ stateTransactions: transactions})
    }

    deleteTransaction = (transaction) => {
        const newTransactions = this.state.stateTransactions.filter(
            object => JSON.stringify(transaction) !== JSON.stringify(object)
        )
        this.setState({ stateTransactions: newTransactions})        
    }
}

render() {
    return (

    <ul>
        {
            this.state.stateTransactions.map((transaction) => 
                <TransactionContainer data={transaction} deleteTransaction={this.deleteTransaction}/>
            )
        }
    </ul>
    )
}