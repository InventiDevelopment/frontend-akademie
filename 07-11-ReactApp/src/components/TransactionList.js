import React from 'react';
import Modal from 'react-modal';
import transactions from '../data/transactions';
import TransactionContainer from './TransactionContainer';
import '../scss/app.css';

export default class TransactionList extends React.Component {
  state = {
    stateTransactions: [],
    modalOpen: false
   }

  componentDidMount() {
    this.setState({ stateTransactions: transactions })
  }

  deleteTransaction = (transaction) => {
    const newTransactions = this.state.stateTransactions.filter(
      object => JSON.stringify(transaction) !== JSON.stringify(object)
    )
    this.setState({ stateTransactions: newTransactions })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  openModal = () => {
    this.setState({ modalOpen: true })
  }

  render() {
    return (
      <React.Fragment>
        <ul className="transaction-list">
          {
            this.state.stateTransactions.map((transaction) =>
              <TransactionContainer data={transaction} deleteTransaction={this.deleteTransaction} />
            )
          }
        </ul>
        <div className="button-add">
          <button className="select-option-button" onClick={this.openModal}><i class="fas fa-plus"></i></button>
        </div>
        <Modal isOpen={this.state.modalOpen} onRequestClose={this.closeModal}>
          <input />
          <input />
        </Modal>
      </React.Fragment>
    )
  }}