// HOC - Higher-Order Components
// komponenta vyššího řádu

import React, {Component} from 'react';
import connect from 'react-redux/lib/connect/connect';
import transactions from '../data/transactions';
import { getTransactionData } from '../actions';


export default (WrappedCommponent) => {

    class InitTransactions extends Component {
        componentDidMount() {
            this.props.getTransactionData(transactions)
        }

        render() {
            return (<WrappedCommponent {...this.props} />)
        }
    }

    return connect(null, { getTransactionData })(InitTransactions);
}