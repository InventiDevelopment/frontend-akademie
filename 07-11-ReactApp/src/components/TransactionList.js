import React from 'react';
import Modal from 'react-modal';
import transactions from '../data/transactions';
import TransactionContainer from './TransactionContainer';

export default class TransactionList extends React.Component {
    state = { 
        stateTransactions: [],
        modalOpen: false
    }

    componentDidMount() {
        this.setState({ transactions: transactions})
    }

    deleteTransaction = (transaction) => {
        const newTransaction = this.state.stateTransactions.filter(object => JSON.stringify(transaction) !== JSON.stringify(object))
    }

    render() {
        return (
        <React.Fragment>
            <ul>
                {
                    transactions.map((transaction) => 
                        <TransactionContainer data={transaction} action={this.deleteTransaction} />
                    )
                }
            </ul>
            <Modal isOpen={this.state.modalOpen}>
                <input />
                <input />
            </Modal>
        </React.Fragment>
    )
    }

}