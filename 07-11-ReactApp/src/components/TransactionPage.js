import React from 'react';
import TransactionList from './TransactionList';
import AddButton from './AddButton';
import styled from 'styled-components'
import TotalBalance from './TotalBalance'
import FilterButton from './FilterButton'

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
          <div>
          <TopSection>
            <Line/>
            <TotalBalance stateTransactions={this.props.stateTransactions}/>
            <FilterButton/>
          </TopSection>
          <TransactionList modalOpen={this.state.modalOpen} closeModal={this.closeModal} stateTransactions={this.props.stateTransactions}
          editTransaction={this.props.editTransaction} deleteTransaction={this.props.deleteTransaction}
                           addTransaction={this.props.addTransaction}/>
          </div>
        </Section>
        <AddButton openModal={this.openModal}/>
      </React.Fragment>
  )
  }
}