import React from 'react';
import Modal from 'react-modal';
import getTime from 'date-fns/get_time';
import TransactionList from '../components/TransactionList';
import AddModalForm from '../components/AddModalForm';
import AddButton from '../components/AddButton';
import TotalBalance from '../components/TotalBalance';
import FilterButton from '../components/FilterButton';
import styled from 'styled-components';
import connect from 'react-redux/lib/connect/connect';
import { getFilteredTransactions, getTotal } from '../reducers/transactions'
import { addTransactionToBE, editTransactionInBE, deleteTransactionFromBE, setTransactionVisibility } from '../actions';

const customModal = {
  content : {
    top                   : '0',
    left                  : '0',
    right                 : '0',
    bottom                : '0',
    'background-color'      : 'rgba(0, 0, 0, .5)',
  }
}

const Section = styled.section`
  margin-top: 11vh;
`
const Line = styled.div`
  border-top: #A38280;
  border-top-style: solid;
  border-top-width: 3px;
  width: 50%;
`
const TopSection = styled.div`
  height: 130px;
  align-items: center;
  width: 100%;
  position: fixed;
  background-color: #F5F1E9;
  top: 11vh;
`
const transactionState = {name: '', value: 0, type: 'income', created: ''}

class TransactionPage extends React.Component {
  state = {
    addModalOpen: false,
    ...transactionState}

  deleteTransaction = (transaction)=> {
    this.props.deleteTransactionFromBE(transaction.id)
  }


  newValue = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }

  addTransaction = ()=>{
    let date = this.state.created;
    if(date === '') date = getTime(new Date())
    if(this.state.name !== '') {
      this.props.addTransactionToBE({
        name: this.state.name,
        value: parseInt(this.state.value, 0),
        type: this.state.type,
        created: date,
        id: this.state.created
      })
      this.setState({addModalOpen: false})
      this.setState({...transactionState})}
    else alert("Please fill out all fields")
  }


  editTransaction = (transaction, name, value)=> {
    let title = this.state.name;
    let val = this.state.value;
    let date = this.state.created;
    if(title === '') title = name;
    if(val === 0) val = value;
    if(date === '') date = getTime(new Date());
    this.props.editTransactionInBE({
      name: title,
      value: parseInt(val, 0),
      type: this.state.type,
      created: date,
      id: transaction.id
      })
    this.setState({...transactionState})}


  setTransactionVisible = (index) => {
    this.props.setTransactionVisibility(index);
  }

  openAddModal = () => {
    this.setState({addModalOpen: true})
  }

  closeAddModal = () => {
    this.setState({addModalOpen: false})
  }


  render(){
    return(
      <React.Fragment>
        <Section>
          <div>
            <TopSection>
              <Line/>
              <TotalBalance overview={this.props.overview}/>
              <FilterButton buttonNames={["All", "Income", "Expenses"]} onClick={this.setTransactionVisible}/>
            </TopSection>
            <TransactionList transactions={this.props.transactions}
                             deleteTransaction={this.deleteTransaction}
                             editTransaction={this.editTransaction}
                             name = {this.state.name}
                             value={this.state.value}
                             type={this.state.type}
                             created={this.state.created}
                             newValue={this.newValue}/>
          </div>
        </Section>
        <AddButton openModal={this.openAddModal}/>
        <Modal isOpen={this.state.addModalOpen} style={customModal}>
          <AddModalForm
                    closeModal={this.closeAddModal}
                    name = {this.state.name}
                    value={this.state.value}
                    type={this.state.type}
                    created={this.state.created}
                    newValue={this.newValue}
                    addTransaction={this.addTransaction}/>
        </Modal>
      </React.Fragment>
  )
  }
}

const mapStateToProps = (store) => {
  return{
    transactions: getFilteredTransactions(store),
    overview: getTotal(store)
  }
}
export default connect(mapStateToProps,
  {addTransactionToBE, editTransactionInBE, deleteTransactionFromBE, setTransactionVisibility})(TransactionPage)