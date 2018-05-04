import React, { Component } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { faChartBar } from '@fortawesome/fontawesome-free-regular';
import getTime from 'date-fns/get_time';
import transactions from '../data/transactions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TransactionList from '../components/TransactionList';
import Content from '../components/Content';
import StyledButton from '../components/StyledButton';
import StyledIcon from '../components/StyledIcon';
import AddTransactionForm from '../components/AddTransactionForm';
import ToggleButtons from '../components/ToggleButtons';

const defaultNewTransactionState = { value: 0, message: '', type: 'income' };

export default class Transactions extends Component {
  state = {
    stateTransactions: [],
    modalOpen: false,
    transactionVisibleCategory: 0,
    ...defaultNewTransactionState
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

  valueChanged = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  addTransaction = () => {
    this.setState(prevState => {
      return {
        ...defaultNewTransactionState,
        modalOpen: false,
        stateTransactions: [
          ...prevState.stateTransactions,
          {
            value: parseInt(prevState.value, 0),
            name: prevState.message,
            type: prevState.type,
            created: getTime(new Date())
          }
        ]
      }
    })
  }

  setTransactinonVisibleCategory = (index) => {
    this.setState({ transactionVisibleCategory: index });
  }

  getTransactions = () => {
    const { transactionVisibleCategory, stateTransactions } = this.state;
    switch (transactionVisibleCategory) {
      case 0:
      default:
      return stateTransactions;

      case 1:
      return stateTransactions.filter((transaction) => transaction.type === 'income');

      case 2:
      return stateTransactions.filter((transaction) => transaction.type === 'expense');
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
            addTransaction={this.addTransaction} 
          />
        </Modal>
      </React.Fragment>
    )
  }
}
