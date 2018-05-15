import React, { Component } from 'react';
import transactions from '../data/transactions';

export default (WrappedComponent) => {
    class InitTransactions extend Component {
        componentDidMount() {
            this.props.setInitialTransactions(transactions)
          }

        render () {
            return (<WrappedComponent {...this.props}/>)
        }
    }

    return connect(null, { setInitialTransactions })InitTransactions
}