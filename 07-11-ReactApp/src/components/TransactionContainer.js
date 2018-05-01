import React, { Component } from 'react';
import Transaction from './Transaction';

export default class TransactionContainer extends Component {
  state = { expanded: false }

<<<<<<< HEAD
  clickHandler = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    return (
      <Transaction data={this.props.data}
        expanded={this.state.expanded}
        toggleExpanded={this.clickHandler}
        deleteTransaction={this.props.deleteTransaction} />
    )
  }
}
=======
    clickHandler = () => {
        this.setState({ expanded: !this.state.expanded })
    }

    render() {
        return (
            <Transaction data={this.props.data}
                expanded={this.state.expanded}
                toggleExpanded={this.clickHandler}
                deleteTransaction={this.props.deleteTransaction} />
        )
    }
}
>>>>>>> 793a2ae98ee0071af58408129ec3113499184140
