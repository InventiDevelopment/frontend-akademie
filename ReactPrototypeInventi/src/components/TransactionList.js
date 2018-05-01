import React from 'react';
import Modal from 'react-modal';
import StyledButton from './StyledButton';
import transactions from '../data/transactions';
import TransactionContainer from './TransactionContainer';

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
        <ul style={{padding: 0}}>
          {
            this.state.stateTransactions.map((transaction) =>
              <TransactionContainer data={transaction} deleteTransaction={this.deleteTransaction} />
            )
          }
        </ul>
        <div>
          <StyledButton onClick={this.openModal}>Open modal</StyledButton>
        </div>
        <Modal isOpen={this.state.modalOpen} onRequestClose={this.closeModal}>
          <input />
          <input />
        </Modal>
      </React.Fragment>
    )
  }
}
