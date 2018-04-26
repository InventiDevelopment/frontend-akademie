import React from 'react';
import Modal from 'react-modal'
import transactions from '../data/transactions';
import TransactionContainer from './TransactionContainer';

export default class TransactionList extends React.Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

    state = { stateTransactions: [] }

    componentDidMount() {
        this.setState({ stateTransactions: transactions })
    }

    deleteTransaction = (transaction) => {
        const newTransactions = this.state.stateTransactions.filter(
          object => JSON.stringify(transaction) !== JSON.stringify(object))
      this.setState({ stateTransactions: newTransactions })
    }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

    render() {
        return (
          <React.Fragment>
            <ul>
                {
                    this.state.stateTransactions.map((transaction) =>
                        <TransactionContainer data={transaction} deleteTransaction={this.deleteTransaction} />
                    )
                }
            </ul>
              <button onClick={this.openModal}>Open Modal</button>
            <Modal onClick={this.state.openModal}>
              <input />
            </Modal>
          </React.Fragment>
        )
    }
}
