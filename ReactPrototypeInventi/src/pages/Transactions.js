import React, { Component } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { faChartBar } from '@fortawesome/fontawesome-free-regular';
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
import { getAllTransactions, apiAddTransaction, deleteTransaction } from '../actions';

const defaultNewTransactionState = { value: 0, message: '', type: 'income' };

class Transactions extends Component {
  state = {
    modalOpen: false,
    transactionVisibleCategory: 0,
    ...defaultNewTransactionState
  }

  componentDidMount() {
    this.props.getAllTransactions();
  }

  deleteTransaction = (transaction) => {
    this.props.deleteTransaction(transaction);
  }

  valueChanged = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  addNewTransaction = () => {
    this.props.apiAddTransaction({
      id: getTime(new Date()),
      value: parseInt(this.state.value, 0),
      name: this.state.message,
      type: this.state.type,
      created: getTime(new Date())
    })
    this.setState({modalOpen: false})
  }

  setTransactinonVisibleCategory = (index) => {
    this.setState({ transactionVisibleCategory: index });
  }

  getTransactions = () => {
    const { transactionVisibleCategory } = this.state;
    const { transactions } = this.props;

    switch (transactionVisibleCategory) {
      case 0:
      default:
      return transactions;

      case 1:
      return transactions.filter((transaction) => transaction.type === 'income');

      case 2:
      return transactions.filter((transaction) => transaction.type === 'expense');
    }
  }

  render() {
    const { modalOpen, value, message, type, transactionVisibleCategory } = this.state;
    return (
      <React.Fragment>
        <Header centered>
          <ToggleButtons margin="0 20px 0 0" buttonNames={["All", "In", "Out"]} onClick={this.setTransactinonVisibleCategory} activeIndex={transactionVisibleCategory} />
          <StyledButton icon onClick={() => this.props.history.push("/overview")}>
            <StyledIcon icon={faChartBar} />
          </StyledButton>
        </Header>
        <Content>
          <TransactionList transactions={this.getTransactions()} deleteTransaction={this.deleteTransaction} />
        </Content>
        <Footer>
          <StyledButton block onClick={() => this.setState({modalOpen: true})}>Add new</StyledButton>
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
    transactions: store.transactions
  }
}

export default connect(mapStateToProps, { getAllTransactions, apiAddTransaction, deleteTransaction })(Transactions)
