import React from 'react';
import transactions from '../data/transactions';
import TransactionContainer from './TransactionContainer';

export default class TransactionList extends React.Component {
    render() {
        return (
            <ul>
                {
                    transactions.map((transaction) =>
                        <TransactionContainer data={transaction} />
                    )
                }
            </ul>
        )
    }
}