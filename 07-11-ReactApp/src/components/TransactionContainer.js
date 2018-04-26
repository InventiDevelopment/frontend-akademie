import React, { Component } from 'react';
import Transaction from './Transaction';


export default class TransactionContainer extends Component {

    state = { expanded: false }

    clickHandler = () => {
        this.setState({ expanded: !this.state.expanded })
    }

    render() {
        return (
            <li className="list-item" onClick={this.clickHandler}>
                <Transaction data={ this.props.data } expanded={this.state.expanded} />
            </li>
        )
    }
}