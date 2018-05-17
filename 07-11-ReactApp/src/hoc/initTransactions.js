import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import { getTransactionData } from '../actions';

export default (WrappedComponent) => {
  class InitTransactions extends Component {
    componentDidMount() {
      this.props.getTransactionData()
    }

    render() {
      return (<WrappedComponent {...this.props} />)
    }
  }

  return connect(null, { getTransactionData })(InitTransactions);
}