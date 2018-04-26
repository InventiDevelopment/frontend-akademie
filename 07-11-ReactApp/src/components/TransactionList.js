import React from 'react';
import transactions from '../data/transactions';
import TransactionContainer from './TransactionContainer';
import Modal from "react-modal";

export default class TransactionList extends React.Component {
    state = { stateTransactions: [] }

    componentDidMount() {
        this.setState({ stateTransactions: transactions })
    }

    deleteTransaction = (transaction) =>  {  
        this.state.stateTransactions.filter(object => JSON.stringify(transaction) !== JSON.stringify(object))
    }
    
    render() {
        return (
            <ul>
                {
                    this.state.stateTransactions.map((transaction) =>
                        <TransactionContainer data={transaction} deleteTransaction={this.deleteTransaction} />
                    )
                }
            </ul>
        )
    }
}