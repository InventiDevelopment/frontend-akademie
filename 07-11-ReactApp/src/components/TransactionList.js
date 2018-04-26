/* eslint-disable no-unused-vars */
import React from 'react'
import Modal from 'react-modal';
import transactions from '../data/transactions'
import TransactionContainer from './TransactionContainer'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faClose from '@fortawesome/fontawesome-free-solid/faTrash';

import styled from 'styled-components';

const TransList = styled.ul`
  margin: 0;
  padding: 0 20px;
  list-style-type: none;
  flex: 1 0 auto;
`;

const Section = styled.section`
  height: 52vh;
  margin-top: 26vh;
  margin-bottom: 16vh;
  overflow-y: auto;
`

export default  class TransactionList extends React.Component{
  state = { stateTransactions: [],
  modalOpen: false}
  componentDidMount(){
    this.setState({stateTransactions: transactions})
  }
  deleteTransaction = (transaction)=> {
    const newTransactions = this.state.stateTransactions.filter(
      object => JSON.stringify(transaction) !== JSON.stringify(object))
    this.setState({stateTransactions: newTransactions})
  }
  openModal = () => {
    this.setState({modalOpen:true})
  }
  closeModal = () => {
    this.setState({modalOpen:false})
  }
  render(){
    return(
      <Section>
        <TransList>
          {
            this.state.stateTransactions.map((transaction, i) =>
              <TransactionContainer data = {transaction} key={i}/>
            )
          }
        </TransList>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal isOpen={this.state.modalOpen} onRequestClose={this.closeModal}>
          <div>
            <div>
              <label>Name</label>
              <input type="text>"></input>
            </div>
            <div>
              <label>Value</label>
              <input type="number"></input>
            </div>
            <div>
              <label>Date created</label>
              <input type="datetime-local"></input>
            </div>
            <div>
              <span>Type</span>
              <select>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </select>
            </div>
            <div>
              <button>Save</button>
              <button><FontAwesomeIcon icon={faClose}/></button>
            </div>
          </div>
        </Modal>
      </Section>

    )
  }
}

