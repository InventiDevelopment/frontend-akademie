import React from 'react';
import transactions from '../data/transactions'
import TransactionContainer from "./TransactionContainer";


export default () => (
    <ul>
        {
            transactions.map((transaction) =>
                <TransactionContainer transaction={transaction}/>
            )
        }
    </ul>
)