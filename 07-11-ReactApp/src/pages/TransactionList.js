import React from 'react';
import Modal from 'react-modal/lib/components/Modal';
import getTime from 'date-fns/get_time';
import Heading from '../components/Heading';
import Footer from '../components/Footer';
import TransactionList from '../components/TransactionList';
import Content from '../components/Content';
import Button from '../components/Button';
import Form from '../components/Form';
import ToggleButtons from '../components/ToggleButtons';
import connect from 'react-redux/lib/connect/connect';
import { addTransactionToBE, deleteTransactionFromBE, setTransactionVisibility } from '../actions';
import { getFilteredTransactions } from '../reducers/transaction';

const defaultNewTransactionState = { value: 0, message: '', type: 'income' };

class Transactions extends React.Component {
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
        <Heading centered>
          <ToggleButtons margin="0 20px 0 0" buttonNames={["All", "In", "Out"]} onClick={this.setTransactinonVisibleCategory} activeIndex={transactionVisibleCategory} />
          <Button icon onClick={() => this.props.history.push("/overview")}>
            Overview
          </Button>
        </Heading>
        <Content>
          <TransactionList transactions={this.props.transactions} deleteTransaction={this.deleteTransaction} />
        </Content>
        <Footer>
          <Button block onClick={() => this.setState({modalOpen: true})}>Add transaction</Button>
        </Footer>
        <Modal isOpen={modalOpen} onRequestClose={() => this.setState({modalOpen: false})}>
          <Form value={value}
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