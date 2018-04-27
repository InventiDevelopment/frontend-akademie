import React from 'react';
import TransactionList from './TransactionList';
import AddButton from './AddButton';
import styled from 'styled-components'
import TotalBalance from './TotalBalance'
import FilterButton from './FilterButton'

const Section = styled.section`
  margin-top: 11vh;
  height: 74vh;
`
const Line = styled.div`
  border-top: #A38280;
  border-top-style: solid;
  border-top-width: 3px;
  width: 50%;
`

export default class TransactionPage extends React.Component {
  state={modalOpen: false}

  openModal = () => {
    this.setState({ modalOpen: true })
  };
  closeModal = () => {
    this.setState({ modalOpen: false})
  };
  render(){
    return(
      <React.Fragment>
        <Section>
          <Line/>
          <TotalBalance stateTransactions={this.props.stateTransactions}/>
          <FilterButton/>
          <TransactionList modalOpen={this.state.modalOpen} closeModal={this.closeModal} stateTransactions={this.props.stateTransactions}
          editTransaction={this.props.editTransaction} deleteTransaction={this.props.deleteTransaction}
                           addTransaction={this.props.addTransaction}/>
        </Section>
        <AddButton openModal={this.openModal}/>
      </React.Fragment>
  )
  }
}