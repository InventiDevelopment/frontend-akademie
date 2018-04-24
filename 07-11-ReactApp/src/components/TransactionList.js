import React from 'react'
import transactions from '../data/transactions';
// import Transaction from './Transaction';
import TransactionContainer from './TransactionContainer'

export default () => (
    <ul>
        {
            transactions.map((transaction) => 
                <TransactionContainer data={transaction} />
            )
        }
    </ul>
)

