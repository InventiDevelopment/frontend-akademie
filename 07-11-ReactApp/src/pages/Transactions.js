import React, { Component } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { faChartBar } from '@fortawesome/fontawesome-free-regular';
import { faPlusSquare } from '@fortawesome/fontawesome-free-regular';
import getTime from 'date-fns/get_time';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TransactionList from '../components/TransactionList';
import Content from '../components/Content';
import StyledButton from '../components/StyledButton';
import StyledIcon from '../components/StyledIcon';
import AddTransactionForm from '../components/AddTransactionForm';
import ToggleButtons from '../components/ToggleButtons';
import connect from 'react-redux/lib/connect/connect';
import { addTransactionToBE, editTransactionInBE, deleteTransactionFromBE, setTransactionVisibility, setSelectedButton } from '../actions';
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

  editTransaction = (transaction) => {
    const currentTime = new Date();
    this.props.editTransactionInBE({
      value: '',
      name: '',
      type: '',
      created: getTime(currentTime),
      id: getTime(currentTime)
    })
    this.setState({ modalOpen: false })
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

  setTransactionVisibleCategory = (index) => {
    this.props.setTransactionVisibility(index);
  }

  render() {
    const { modalOpen, value, message, type, transactionVisibleCategory, selectedButton } = this.state;
    return (
      <React.Fragment>
        <Header centered>
          <ToggleButtons margin="0 20px 0 0" buttonNames={["All", "In", "Out"]} onClick={this.setTransactionVisibleCategory} activeIndex={transactionVisibleCategory} />
          <StyledButton add icon onClick={() => this.props.history.push("/overview")}>
            <StyledIcon icon={faChartBar} />
          </StyledButton>
        </Header>
        <Content>
          <TransactionList transactions={this.props.transactions} deleteTransaction={this.deleteTransaction} />
        </Content>
        <Footer>
          <StyledButton add onClick={() => this.setState({modalOpen: true})}>
          <StyledIcon icon={faPlusSquare} />
          </StyledButton>
        </Footer>
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
