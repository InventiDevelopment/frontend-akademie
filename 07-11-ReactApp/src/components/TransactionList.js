import React from 'react';
import transactions from '../data/transactions';
import TransactionContainer from './TransactionContainer';


export default () => (
    <ul>
        {
            transactions.map((transaction) => (
                <TransactionContainer data={transaction} />
            ))
        }
    </ul>
)

componentDidMount() {
    this.TransactionList = setInterval(
      () => this.tick(),
      1000
    );
    tick() {
        this.setState({
          date: new Date()
        });
  }