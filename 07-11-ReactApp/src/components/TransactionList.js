import React from 'react';
import transactions from '../data/transactions';
import Transaction from './Transaction';

export default () => (
    <ul>
        {
            transactions.map((transaction) => 
                <Transaction data = {transaction} />
        )
        }

    </ul>
)
