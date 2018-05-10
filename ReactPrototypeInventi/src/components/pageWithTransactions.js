import React, { Component } from 'react';
import { connect } from 'react-redux';
import transactions from '../data/transactions';
import { setInitialTransactions } from '../actions';
import { getTransactions } from '../reducers/transactions';

export default WrappedComponent => {
  class PageWithTransactions extends Component {
    componentDidMount() {
      if (this.props.transactions.length === 0) {
        this.props.setInitialTransactions(transactions)
      }
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      )
    }
  }

  const mapStateToProps = store => {
    return {
      transactions: getTransactions(store)
    }
  }

  return connect(mapStateToProps, { setInitialTransactions })(PageWithTransactions);
}
