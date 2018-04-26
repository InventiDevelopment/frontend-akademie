import React from 'react';
import Transaction from './Transaction';

export default class TransactionContainer extends React.Component {
    state = { expanded: false }

    clickHandler = () => {
        this.setState({expanded: !this.state.expanded});
    }

    render () {
        return (
            <Transaction data={this.props.data}
            expanded={this.state.expanded}
            toggleExpanded={this.clickHandler}
            deleteTransaction={this.props.deleteTransaction} />
            )
    }
}
