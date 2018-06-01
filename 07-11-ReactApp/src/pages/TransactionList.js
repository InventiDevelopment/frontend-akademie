import React, { Component } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { faChartBar } from '@fortawesome/fontawesome-free-regular';
import getTime from 'date-fns/get_time';
import TransactionList from '../components/TransactionList';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Form from '../components/Form';
import ToggleButtons from '../components/ToggleButtons';
import connect from 'react-redux/lib/connect/connect';
import { addTransactionToBE, deleteTransactionFromBE, setTransactionVisibility } from '../actions';
import { getFilteredTransactions } from '../reducers/transactions';

const defaultNewTransactionState = { value: 0, message: '', type: 'income' };

class Transactions extends Component {
  state = {
    modalOpen: false,
    ...defaultNewTransactionState
  }

  deleteTransaction = (transaction) => {
    this.props.deleteTransactionFromBE(transaction.id);
  }

  valueChanged = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  addNewTransaction = () => {
    const currentTime = new Date();
    this.props.addTransactionToBE({
      value: parseInt(this.state.value, 0),
      name: this.state.message,
      type: this.state.type,
      created: getTime(currentTime),
      id: getTime(currentTime)
    })
    this.setState({ modalOpen: false })
  }

  setTransactinonVisibleCategory = (index) => {
    this.props.setTransactionVisibility(index);
  }

  render() {
    const { modalOpen, value, message, type, transactionVisibleCategory } = this.state;
    return (
      <React.Fragment>
          <ToggleButtons margin="0 20px 0 0" buttonNames={["All", "In", "Out"]} onClick={this.setTransactinonVisibleCategory} activeIndex={transactionVisibleCategory} />
          <Button icon onClick={() => this.props.history.push("/overview")}>
            <Icon icon={faChartBar} />
          </Button>
          <TransactionList transactions={this.props.transactions} deleteTransaction={this.deleteTransaction} />
          <Button block onClick={() => this.setState({modalOpen: true})}>Add new</Button>
        <Modal isOpen={modalOpen} onRequestClose={() => this.setState({modalOpen: false})}>
          <AddTransactionForm value={value}
            message={message}
            type={type}
            valueChanged={this.valueChanged}
            addTransaction={this.addNewTransaction}
          />
        </Modal>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    transactions: getFilteredTransactions(store)
  }
}

export default connect(mapStateToProps,
  { addTransactionToBE, deleteTransactionFromBE, setTransactionVisibility }
)(Transactions)